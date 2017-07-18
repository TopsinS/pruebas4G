import {Injectable} from '@angular/core';

import {Cliente} from './cliente';
import {CLIENTES} from './mock-clientes';

@Injectable()
export class ClienteService {
	getClientes(): Promise<Cliente[]> {
		return Promise.resolve(CLIENTES);
	}

  	getClientesSlowly(): Promise<Cliente[]> {
  		return new Promise(resolve => {setTimeout(() => resolve(this.getClientes()),100);});
	}
}