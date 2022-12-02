import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor { //intercepa a requisição.auth service implementa o Http

  constructor() {}


//intercepta as requisições e insere o token de autorização, é preciso deixar claro que o authInterceptor vai interceptar
//é preciso passar o beare(token) para que o back dê acesso, o interceptor faz isso
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> { //requisição e a fila
    const token = localStorage.getItem("token")//pegar o token que tá no storage
    if (token){//verificar se o token exita, e colocar na requisição
      const clonerequest = request.clone({ //clona a requisição atual,
        headers: request.headers.set("Authorization", `Bearer ${token}`)// e insere a authorizatin e o bearer
      });
      return next.handle(request);
    }
    else{
      return next.handle(request) // se o token não existe retorna a requisição
    }
  }
}
