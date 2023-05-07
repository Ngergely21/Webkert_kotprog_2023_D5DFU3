import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {AdminService} from "../../shared/services/admin.service";
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent{



      email= new FormControl('', [(c:AbstractControl)=>Validators.required(c), Validators.email]);
      pwd= new FormControl('', [(c:AbstractControl)=>Validators.required(c), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]);
      repwd= new FormControl('', [(c:AbstractControl)=>Validators.required(c)]);

      registForm=this.fb.group({
        email: this.email,
        pwd:this.pwd,
        repwd:this.repwd
      },{
        validator:this.ConfirmedValidator('pwd','repwd')
      })


  hide = true;
  hide2=true;

  constructor(private router : Router,private fb:FormBuilder,private auth: AuthService,private adminservice:AdminService) {}


  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors["confirmedValidator"]
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }


  signUp() {
    this.auth.signup(this.registForm.get('email')?.value,this.registForm.get('pwd')?.value).then((cred)=>{
      localStorage.setItem('user',JSON.stringify(cred.user.uid));
      this.adminservice.create()
      if(localStorage.getItem('user')!=='null')
      {
        console.log(localStorage.getItem('use'));
        this.adminservice.get(JSON.parse(localStorage.getItem('user'))).subscribe(admin=>{
          console.log(admin[0].admin);
          localStorage.setItem('admin',JSON.stringify(admin[0].admin));
        })


      }
      else{
        localStorage.setItem('admin',JSON.stringify(false));
      }
    });
    this.router.navigateByUrl('/main');
  }
}
