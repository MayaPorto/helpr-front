import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

//aqui que será as importações agora, ele que declara o componete de login
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,//rotas
    MaterialModule,
    ReactiveFormsModule //para ultilizar o formulário
  ]
})
export class LoginModule { }
