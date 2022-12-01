import { Credenciais } from './../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, EMPTY, tap } from 'rxjs';//observable, tap
import { Token } from '../models/token';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


    //Credenciais é a Interface
  public authenticate(credenciais: Credenciais): Observable <Token> { // capturar credenciais, requisitar token de autorização e autenticar
    return this.http.post<Token>(`${API_CONFIG.baseUrl}/auth/login`, credenciais).pipe (//endpoint, uma requisição que retorna um token
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
}
