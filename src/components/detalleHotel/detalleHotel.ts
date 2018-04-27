import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

/*Providers*/
import { API_AlMundoProvider } from '../../providers/API_AlMundo';

/*Models*/
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'component-detalleHotel',
  templateUrl: 'detalleHotel.html'
})
export class detalleHotelComponent{
  public listHotels: Array<Hotel> = new Array<Hotel>();
  fakeArray = new Array(4);
  constructor(public navCtrl: NavController, public API_AlMundo: API_AlMundoProvider) {

  }

}
