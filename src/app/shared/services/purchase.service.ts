import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Purchase} from "../models/purchase";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  collectionName='Purchases';

  constructor(private afs: AngularFirestore) {}
  create(purchase:Purchase){
    return this.afs.collection<Purchase>(this.collectionName).doc(this.afs.createId()).set(purchase);
  }
  update(){
  }
  delete(){
  }
  getAll(){

  }
  get(uid:string){
    return this.afs.collection<Purchase>(this.collectionName,ref => ref.where('uid','==',uid)).valueChanges();
  }
}
