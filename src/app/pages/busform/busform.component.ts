import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BusService} from "../../shared/services/bus.service";
import {Bus} from "../../shared/models/bus";

@Component({
  selector: 'app-busform',
  templateUrl: './busform.component.html',
  styleUrls: ['./busform.component.scss']
})
export class BusformComponent {
  busAddForm=new FormGroup({
    bid:new FormControl('',[Validators.required]),
    dep:new FormControl('',[Validators.required]),
    dest:new FormControl('',[Validators.required]),
    dist:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    toa:new FormControl('time',[Validators.required]),
    tod:new FormControl('',[Validators.required])
  })
  constructor(private router:Router,private busservice:BusService) {
  }

  addBus() {
    const bus:Bus={
      bid: this.busAddForm.get('bid')?.value,
      dep: this.busAddForm.get('dep')?.value,
      dest: this.busAddForm.get('dest')?.value,
      dist: +this.busAddForm.get('dist')?.value,
      price: +this.busAddForm.get('price')?.value,
      tod: this.busAddForm.get('tod')?.value,
      toa: this.busAddForm.get('toa')?.value
    }
    this.busservice.create(bus).then(r => {this.router.navigateByUrl('/buses')});
  }
}
