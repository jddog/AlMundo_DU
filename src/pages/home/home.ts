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
      this.listHotels = response;
      this.listHotelsOriginal = response;
    });
  }

  obtenerFiltros(event):void{

    this.listHotels = this.listHotelsOriginal
    this.filtrosRecibidos = event;
    
    this.listHotels = this.listHotels.filter(f => (this.filtrosRecibidos.nombreHotel != "" && f.name.toLowerCase().indexOf(this.filtrosRecibidos.nombreHotel.toLowerCase()) !== -1)
    || (this.filtrosRecibidos.estrellas.find(fin => (fin != -1 && fin == f.stars) || (fin == -1)))
  );

  /* CUANDO ESTE EL API
  this.API_AlMundo.getListhotelsFilter()
  .subscribe(response => {
    this.listHotels = response;
  });
*/
  }
  
  mostrarFiltros(){
    this.flagMostrarFiltros= !this.flagMostrarFiltros;
  }

}
