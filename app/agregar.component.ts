import { Component, Input } from '@angular/core';
import {Cliente} from './cliente';

@Component({
	selector:'agregar-new',
	templateUrl:'./agregar.component.html',
	styleUrls:['./clientes.component.css']
})


export class AgregarComponent{
	@Input() clienten:Cliente;
/*	tienesedes = false;

	agregarsinSedes(){
		
	}
	
	agregarSedes():void{
		this.tienesedes = true;
	}*/
}