import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {AdminService} from "../../shared/services/admin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm=new FormGroup(
    { email:new FormControl('', [Validators.required,Validators.email]),
             pwd:new FormControl('',[Validators.required,
               Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
             ])
            });
  hide = true;

  constructor(private router:Router,private authService:AuthService, private adminservice: AdminService){}

  async login() {
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('pwd')?.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/main');
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
    }).catch(error => {
      console.error(error);
      this.router.navigateByUrl('/login');
    });
  }

  ngOnInit(){
  }
}
