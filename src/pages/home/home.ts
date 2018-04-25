import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*Providers*/
import { API_AlMundoProvider } from '../../providers/API_AlMundo';

/*Models*/
import { Hotel } from '../../models/hotel';
import { Amenities } from '../../models/amenities';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [API_AlMundoProvider]
})
export class HomePage {
  public listHotels: Array<Hotel> = new Array<Hotel>();

  constructor(public navCtrl: NavController, public API_AlMundo: API_AlMundoProvider) {

  }

  ngOnInit(){
    this.API_AlMundo.getListhotels()
    .subscribe(response => this.listHotels = response);
  }


    
}
