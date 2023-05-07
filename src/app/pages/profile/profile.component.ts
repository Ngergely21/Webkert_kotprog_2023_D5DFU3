import {Component, OnInit} from '@angular/core';
import {PurchaseService} from "../../shared/services/purchase.service";
import {AdminService} from "../../shared/services/admin.service";
import {FormControl} from "@angular/forms";
import {User} from "../../shared/models/user";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {Purchase} from "../../shared/models/purchase";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  purchases:Array<Purchase>=[];
  isuseradmin$:Observable<boolean>;
  constructor(private router:Router,private purchaseservice:PurchaseService, private adminservice:AdminService) {
  }
  ngOnInit(){
    this.isuseradmin$=of(JSON.parse(localStorage.getItem('admin')));
    this.purchaseservice.get(JSON.parse(localStorage.getItem('user'))).subscribe(purchases=>{
      this.purchases=purchases;
      console.log(purchases);
    });
  }

  save(){
    const user:User={
      uid:JSON.parse(localStorage.getItem('user')),
      admin:!JSON.parse(localStorage.getItem('admin'))
    }
    console.log(user)
    this.adminservice.update(user).then(value => {this.router.navigateByUrl('/main');localStorage.setItem('admin',JSON.stringify(user.admin))});
    return false;
  }
}
