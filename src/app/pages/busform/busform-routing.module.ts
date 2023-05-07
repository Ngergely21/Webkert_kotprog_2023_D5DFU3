import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusformComponent } from './busform.component';

const routes: Routes = [{ path: '', component: BusformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusformRoutingModule { }
