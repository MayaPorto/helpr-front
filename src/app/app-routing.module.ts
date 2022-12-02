import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [ //modulo com todas as rotas filhas de login
  { path: 'login', 
  loadChildren: () =>
 import('./views/login.module').then(m => m.LoginModule) 
},


{ path: 'home', 
loadChildren: () =>
 import('./views/home/home.module').then(m => m.HomeModule),
 canActivate: [AuthGuard]
 }];
//antes era aqui que se fazia a rota


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
