import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir']; //colunas na tabela
  dataSource: Cliente[] = []; //data sourse(array de dados) dados que serão renderizados na tabela, passa o array, e pega o obj que foi passado e renderiza em cada linha na tabela

  constructor() { }

  ngOnInit(): void {
  }

}
