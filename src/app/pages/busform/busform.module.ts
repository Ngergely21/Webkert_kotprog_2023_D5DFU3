import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusformRoutingModule } from './busform-routing.module';
import { BusformComponent } from './busform.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BusformComponent
  ],
  imports: [
    CommonModule,
    BusformRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class BusformModule { }
