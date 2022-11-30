import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = //modulo com todas asa rotas filhas de login
[{ path: 'login', loadChildren: () =>
 import('./views/login.module').then(m => m.LoginModule) }];
//antes era aqui que se fazia a rota


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
