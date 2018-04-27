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
  private rowStars : Number[] = [5,4,3,2,1];
  public flagTodos: Boolean = true;
  @Output() emitirFiltro = new EventEmitter();

  constructor(public navCtrl: NavController, public API_AlMundo: API_AlMundoProvider) {
    this.modeloFiltroRetorno.estrellas = new Array<Number>(); 
    this.modeloFiltroRetorno.estrellas.push(-1);
  }

  mostrarFiltroNombre(){
    this.var_mostrarFiltroNombre = this.var_mostrarFiltroNombre? false: true;
  }

  mostrarFiltroEstrellas(){
    this.var_mostrarFiltroEstrella = this.var_mostrarFiltroEstrella? false: true;
  }

  validarFiltroEstrellas(estrella){
      /*Se valida si existe ya el filtro en el arreglo para quitarlo o agregarlo*/
      var index = this.modeloFiltroRetorno.estrellas.indexOf(estrella);
      if(index >= 0)
      {
          this.modeloFiltroRetorno.estrellas.splice(index, 1);
      }
      else
      {
          this.modeloFiltroRetorno.estrellas.push(estrella);
      }
    this.emitirFiltros();
  }

  emitirFiltros(){
    this.modeloFiltroRetorno.nombreHotel = this.nombreHotel;
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
