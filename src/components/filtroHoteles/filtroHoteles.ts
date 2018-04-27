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
  private var_mostrarFiltroNombre : Boolean = false;
  private var_mostrarFiltroEstrella : Boolean = false;
  private nombreHotel : String = "";
  /*Arreglos para estrellas*/
  private rowStars : Number[] = [5,4,3,2,1];
  @Output() emitirFiltro = new EventEmitter();
 

  constructor(public navCtrl: NavController, public API_AlMundo: API_AlMundoProvider) {

  }

  mostrarFiltroNombre(){
    
    this.var_mostrarFiltroNombre = this.var_mostrarFiltroNombre? false: true;
  }

  mostrarFiltroEstrellas(){
    this.var_mostrarFiltroEstrella = this.var_mostrarFiltroEstrella? false: true;
  }

  emitirFiltros(estrella, flagCheckTodos){
    this.modeloFiltroRetorno.nombreHotel = this.nombreHotel;
    this.modeloFiltroRetorno.estrellas = estrella == -1 && this.modeloFiltroRetorno.estrellas != undefined && !flagCheckTodos? this.modeloFiltroRetorno.estrellas: estrella;
    this.emitirFiltro.emit(this.modeloFiltroRetorno);
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }
    
}
