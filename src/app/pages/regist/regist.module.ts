import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistRoutingModule } from './regist-routing.module';
import { RegistComponent } from './regist.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    RegistComponent
  ],
  imports: [
    CommonModule,
    RegistRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class RegistModule { }
