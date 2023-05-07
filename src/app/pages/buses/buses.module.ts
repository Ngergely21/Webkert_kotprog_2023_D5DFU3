import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusesRoutingModule } from './buses-routing.module';
import { BusesComponent } from './buses.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BusesComponent
  ],
  imports: [
    CommonModule,
    BusesRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class BusesModule { }
