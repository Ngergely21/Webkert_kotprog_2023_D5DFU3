import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'webkert-beadando-d5dfu3';
  isUserLoggedIn$: Observable<any>;
  constructor(private authService:AuthService,private router:Router) {
  }
  ngOnInit(){
    this.isUserLoggedIn$=this.authService.isUserLoggedIn();
  }


  logout() {
    this.authService.logout().then(cred=> {
      localStorage.setItem('user',"null")
      localStorage.setItem('admin',JSON.stringify(false));
      this.router.navigate(['login']);
    }).catch(error=>{
      console.error(error);
    });


  }
}
