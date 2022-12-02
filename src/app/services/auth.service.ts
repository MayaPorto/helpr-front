import { Credenciais } from './../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, EMPTY, tap } from 'rxjs';//observable, tap
import { Token } from '../models/token';
import { API_CONFIG } from '../config/api.config';
import { IfStmt } from '@angular/compiler';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root' //quem manda no services é o app.module
})
export class AuthService {

  private jwt: JwtHelperService = new JwtHelperService; // variavel privada
  constructor(private http: HttpClient) { }


    //Credenciais é a Interface
  public authenticate(credenciais: Credenciais): Observable <Token> { // capturar credenciais, requisitar token de autorização e autenticar
    return this.http.post<Token>(`${API_CONFIG.baseUrl}/auth/login`, credenciais).pipe (//endpoint, uma requisição que retorna um token/ Requisição http(httpClient) faz comunicação com o back
    // Autenticar, o token diz se esta ou não logado, expirado ou não. Guardar localmente no navegador, para usar futuramente
      tap(token => {  //tap executa uma função antes de ser executada 
        localStorage.setItem("token", token.accessToken); //armazenamento local no navegador(localstorage)
      }),
      catchError(error => {
        alert('Erro ao autenticar!');
        console.error(error);
        return EMPTY;
      })
    )
  }

  public isAuthenticate(): boolean {
    let flag: boolean = false;
    const token = localStorage.getItem("token");
    if(token) {
      //verificar se o token está expirado
      flag = !this.jwt.isTokenExpired(token); //verifica se ele não está expirado
    }
    return flag
  }
  
}
