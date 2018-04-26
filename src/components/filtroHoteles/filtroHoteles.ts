import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

/*Providers*/
import { API_AlMundoProvider } from '../../providers/API_AlMundo';

/*Models*/
import { Hotel } from '../../models/hotel';
import { Amenities } from '../../models/amenities';

@Component({
  selector: 'component-filtroHoteles',
  templateUrl: 'filtroHoteles.html',
  providers: [API_AlMundoProvider]
})
export class filtroHotelesComponent{
  public listHotels: Array<Hotel> = new Array<Hotel>();

  constructor(public navCtrl: NavController) {

  }

 


    
}
