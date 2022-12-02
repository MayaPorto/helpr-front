import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwtModule, // para o serviço de autenticação, usado no authservices, add no app.module
    HttpClientModule //para requisições http entre front e back-end

  ],
  providers: [//inserindo um serviço de interceptor: provider é serviço dentro do modulo que modifica as especificações gerais
    {
      provide: HTTP_INTERCEPTORS, //tipo de serviço
      useClass: AuthInterceptor, // Classe criada
      multi: true // vai interceptar multiplas requisições
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
