import { Component, OnInit } from '@angular/core';

import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';


@Component({
  selector: 'mis-clientes',
	templateUrl: './clientes.component.html',
	styleUrls: ['./clientes.component.css']
})


export class ClientesComponent implements OnInit {
  clientes:Cliente[];
  selectedCliente: Cliente;


  constructor(private clienteService: ClienteService) {}

  getClientes(): void {
    this.clienteService.getClientes()
      .then(losclientes => this.clientes = losclientes);
  }

  ngOnInit(): void {
    this.getClientes();
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }
}
