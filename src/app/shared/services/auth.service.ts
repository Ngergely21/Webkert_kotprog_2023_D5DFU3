import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any;
  constructor(private auth:AngularFireAuth) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData.uid));

      } else {
        localStorage.setItem('user', 'null');

       // console.log(JSON.parse(localStorage.getItem('user')));
      }
    });
  }


  async login(email:string, pwd:string){
      return this.auth.signInWithEmailAndPassword(email,pwd);
  }
  signup(email: string, password: string) {

    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  logout() {
    return this.auth.signOut();
  }


}
