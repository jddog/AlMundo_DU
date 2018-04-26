import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { NavController } from 'ionic-angular';

/*Providers*/
import { API_AlMundoProvider } from '../../providers/API_AlMundo';

/*Models*/
import { Hotel } from '../../models/hotel';
import { Amenities } from '../../models/amenities';
import { Filtro } from '../../models/filtro';

@Component({
  selector: 'component-filtroHoteles',
  templateUrl: 'filtroHoteles.html',
  providers: [API_AlMundoProvider]
})
export class filtroHotelesComponent{
  public listHotels: Array<Hotel> = new Array<Hotel>();
  public modeloFiltroRetorno : Filtro = new Filtro();
  private var_mostrarFiltroNombre : Boolean = true;
  private var_mostrarFiltroEstrella : Boolean = true;
  private nombreHotel : String;
  test : Boolean = false;
 

  constructor(public navCtrl: NavController, public API_AlMundo: API_AlMundoProvider) {

  }

  mostrarFiltroNombre(){
    
    this.var_mostrarFiltroNombre = this.var_mostrarFiltroNombre? false: true;
  }

  mostrarFiltroEstrellas(){
    this.var_mostrarFiltroEstrella = this.var_mostrarFiltroEstrella? false: true;
  }

  emitirFiltros(){
    this.test = !this.test;
  }
    
}
