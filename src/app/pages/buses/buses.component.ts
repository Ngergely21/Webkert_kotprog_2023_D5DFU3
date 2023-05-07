import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Bus} from "../../shared/models/bus";
import {BusService} from "../../shared/services/bus.service";
import {Observable, of} from "rxjs";
import {AdminService} from "../../shared/services/admin.service";
import {AuthService} from "../../shared/services/auth.service";
import {Purchase} from "../../shared/models/purchase"
import {PurchaseService} from "../../shared/services/purchase.service";


@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent {
  buses: Array<Bus>=[];
  isuseradmin$:Observable<boolean>;
  isuserloggedin$: Observable<any>
  constructor(private router: Router, private busservice: BusService, private adminservice:AdminService , private authservice: AuthService, private purchaseservice:PurchaseService) {
  }
  ngOnChanges():void{
    this.busservice.getAll().subscribe(buses=>{
      this.buses=buses;
      console.log(buses);
    })

    this.isuseradmin$=of(JSON.parse(localStorage.getItem('admin')));
    console.log(localStorage.getItem('user'));
    console.log(JSON.parse(localStorage.getItem('admin')));
    console.log(this.isuseradmin$)

  }
  ngOnInit():void{
    this.busservice.getAll().subscribe(buses=>{
      this.buses=buses;
    })
    if(localStorage.getItem('user')!=='null')
    {
      console.log(localStorage.getItem('use'));
      this.adminservice.get(JSON.parse(localStorage.getItem('user'))).subscribe(admin=>{
        localStorage.setItem('admin',JSON.stringify(admin[0].admin));
      })


    }
    else{
      localStorage.setItem('admin',JSON.stringify(false));
    }
    this.isuseradmin$=of(JSON.parse(localStorage.getItem('admin')));
    this.isuserloggedin$=this.authservice.isUserLoggedIn();
  }

  busAdd() {
    this.router.navigateByUrl('/busform');
  }

  delete(bus: Bus) {
    this.busservice.delete(bus.bid);
  }
  purchase(bus:Bus)
  {
    let purchase:Purchase={
      uid:JSON.parse(localStorage.getItem('user')),
      bid:bus.bid,
      date:new Date(Date.now()).toDateString(),
    }
    this.purchaseservice.create(purchase);
    this.router.navigateByUrl('/profile')

  }



}
