import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { UpperCasePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ClientesComponent } from './clientes.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail.component';
import { AgregarComponent } from './agregar.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteDetailComponent,
    ClientesComponent,
    DashboardComponent,
    // UpperCasePipe
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'clientes',
        component:ClientesComponent
      },
/*      {
        path:'agregar',
        component: AgregarComponent
      }*/
    ])
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
