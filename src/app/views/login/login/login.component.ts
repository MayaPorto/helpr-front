import { Credenciais } from './../../../models/credenciais';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public formLogin: FormGroup;

  constructor(formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router

    ) { 
    this.formLogin = formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      senha: ["",[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public singIn(): void{
    if(this.formLogin.valid){
      //processo de autenticar
      const credenciais: Credenciais = this.formLogin.value;
      this.authService.authenticate(credenciais).subscribe(response =>{
        alert("Bem-vinso(a)");
        this.router.navigate(["/Home"])
      });
    } else{
      alert("Dados inválidos")
    }
  }
}
