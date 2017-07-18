import { Component, Input } from '@angular/core';
import { Cliente } from './cliente';
import { UpperCasePipe } from '@angular/common';

@Component({
	selector:'cliente-detail',
	templateUrl:'./cliente-detail.component.html',
	styleUrls: ['./clientes.component.css']
	})

export class ClienteDetailComponent {
	@Input() client:Cliente;
}