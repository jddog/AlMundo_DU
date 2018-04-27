import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';


/*Models*/
import { Hotel } from '../../models/hotel';
import { Filtro } from '../../models/filtro';

@Component({
  selector: 'component-listadoHoteles',
  templateUrl: 'listadoHoteles.html'
})
export class listadoHotelesComponent  {
  @Input() hotelRecibido: Hotel;
  fakeArray = new Array(4);
  suscri : any;
  constructor(public navCtrl: NavController) {
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

}
