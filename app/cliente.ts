export class Cliente{
	id:number;
	nombre:string;
	masedes:boolean;
	sedes:Sede[];
}

export class Sede{
	nombre:string;
	servicios:Servicio[];
}

export class Servicio{
	tipo:string;
	interfaz:string;
	velocidad:number;
}