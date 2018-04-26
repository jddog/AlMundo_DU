import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

/*Providers*/
import { API_AlMundoProvider } from '../../providers/API_AlMundo';

/*Models*/
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'component-listadoHoteles',
  templateUrl: 'listadoHoteles.html',
  providers: [API_AlMundoProvider]
})
export class listadoHotelesComponent implements OnInit {
  public listHotels: Array<Hotel> = new Array<Hotel>();

  constructor(public navCtrl: NavController, public API_AlMundo: API_AlMundoProvider) {

  }

  ngOnInit(){
    this.API_AlMundo.getListhotels()
    .subscribe(response => this.listHotels = response);
  }

  myHeaderFn(record, recordIndex, records) {
    if (recordIndex % 20 === 0) {
      return 'Header ' + recordIndex;
    }
    return null;
  }
    
}
