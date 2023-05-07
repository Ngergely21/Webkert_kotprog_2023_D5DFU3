import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
{ path: 'regist', loadChildren: () => import('./pages/regist/regist.module').then(m => m.RegistModule) },
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
{ path: 'buses', loadChildren: () => import('./pages/buses/buses.module').then(m => m.BusesModule) },
{ path: 'busform', loadChildren: () => import('./pages/busform/busform.module').then(m => m.BusformModule) },
{ path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) }, { path: '', pathMatch: 'full', redirectTo: 'main'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
