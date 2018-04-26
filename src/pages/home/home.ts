import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*Models*/
import { Filtro } from '../../models/filtro';
import { Hotel } from '../../models/hotel';

/*Providers*/
import { API_AlMundoProvider } from '../../providers/API_AlMundo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [API_AlMundoProvider]
})
export class HomePage {

 public filtrosRecibidos: Filtro; 
 public listHotels: Array<Hotel> = new Array<Hotel>();

  constructor(public navCtrl: NavController, public API_AlMundo: API_AlMundoProvider) {

    this.API_AlMundo.getListhotels()
    .subscribe(response => {
      this.listHotels = response;
    });
  }

  obtenerFiltros(event):void{
    this.filtrosRecibidos = event.filtros;
  }

}
