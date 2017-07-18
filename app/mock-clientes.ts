import {Cliente} from './cliente';

export const CLIENTES: Cliente[] = [
  { 
  	id: 0, 
  	nombre:'Conori Condaca',
  	masedes:false,
	sedes:[
		{
			nombre:'Principal',
			servicios:[
				{tipo:'internet',interfaz:'eth',velocidad:2},
				{tipo:'cpa',interfaz:'tdm',velocidad:2},
			]
		},
				{
			nombre:'Dabajuro',
			servicios:[
				{tipo:'internet',interfaz:'tdm',velocidad:4},
				{tipo:'datos',interfaz:'eth',velocidad:2},

			]
		}
	]
  },
  { 
  	id: 1, 
  	nombre:'Costa Norte',
  	masedes:true,
	sedes:[
		{
			nombre:'principal',
			servicios:[
				{tipo:'internet',interfaz:'eth',velocidad:60},
				{tipo:'datos',interfaz:'tdm',velocidad:4},
			]
		},
	]
  },

















];