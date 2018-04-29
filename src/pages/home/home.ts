import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';

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
 public listHotelsOriginal: Array<Hotel> = new Array<Hotel>();
 public flagMostrarFiltros : Boolean = true;

  constructor(public navCtrl: NavController, 
              public API_AlMundo: API_AlMundoProvider) {

    this.API_AlMundo.getListhotels()
    .subscribe(response => {
      this.listHotels = response.hotels;
      this.listHotelsOriginal = response.hotels;
    });
  }

  obtenerFiltros(event):void{
    this.filtrosRecibidos = event;
    
    this.API_AlMundo.getListhotelsFilter(this.filtrosRecibidos)
    .subscribe(response => {
      this.listHotels = response.hotelsFilter;
    });

  }
  
  mostrarFiltros(){
    this.flagMostrarFiltros= !this.flagMostrarFiltros;
  }

}
