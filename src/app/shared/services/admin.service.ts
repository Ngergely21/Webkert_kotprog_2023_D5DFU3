import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  collectionName='Admins';

  constructor(private afs:AngularFirestore) {
  }

  create(){
    let create: Promise<void>;
    const user:User={
      uid:JSON.parse(localStorage.getItem('user')),
      admin:false
    }
    if(localStorage.getItem('user')!="null") {
      create=this.afs.collection<User>(this.collectionName).doc(user.uid).set(user);
      localStorage.setItem('admin',String(false));
    }
    return create;
  }
  update(user: User) {
    console.log(user.uid);
    return this.afs.collection<User>(this.collectionName).doc(JSON.parse(localStorage.getItem('user'))).set(user);
  }


  get(uid:string)
  {
    return this.afs.collection<User>(this.collectionName,ref => ref.where('uid','==',uid)).valueChanges();
  }
}
