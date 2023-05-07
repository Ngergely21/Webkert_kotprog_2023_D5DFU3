import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {Bus} from "../models/bus";

@Injectable({
  providedIn: 'root'
})
export class BusService {

  collectionName='Buses';

  constructor(private afs: AngularFirestore) {}
  create(bus:Bus){
    return this.afs.collection<Bus>(this.collectionName).doc(bus.bid).set(bus);
  }
  update(){
  }
  delete(id:string){
    return this.afs.collection<Bus>(this.collectionName).doc(id).delete();
  }

  getAll(){
    return this.afs.collection<Bus>(this.collectionName).valueChanges();
  }
  get(){

  }
}
