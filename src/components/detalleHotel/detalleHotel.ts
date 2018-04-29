import { Component} from '@angular/core';
import { NavController,NavParams, ViewController } from 'ionic-angular';

/*Providers*/
import { API_AlMundoProvider } from '../../providers/API_AlMundo';

/*Models*/
import { Hotel } from '../../models/hotel';

/* firebase*/
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'component-detalleHotel',
  templateUrl: 'detalleHotel.html',
  providers: [API_AlMundoProvider]
})
export class detalleHotelComponent{
  private hotelRecibido : Hotel = new Hotel();
  private resultadoConsultaFire : any;
  private numeroViews : number = 0;
  private suscripcionResultadoConsultaFire : any;
  constructor(public navCtrl: NavController
             ,public API_AlMundo: API_AlMundoProvider
             ,public params: NavParams
             ,public viewCtrl: ViewController
            ,public afd: AngularFireDatabase) {

    this.hotelRecibido = params.get('hotel');
    this.numeroViews = params.get('vistas');

    this.afd.object('viewsHotels/'+this.hotelRecibido.id).update(
      { vistas: (this.numeroViews).toString()}
    );

    this.resultadoConsultaFire = this.afd.object('viewsHotels/'+this.hotelRecibido.id).valueChanges();

    this.suscripcionResultadoConsultaFire = this.resultadoConsultaFire.subscribe(resp =>{
      this.numeroViews = Number(resp.vistas);
    });
    
    
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  volverListadoHoteles(){
    this.afd.object('viewsHotels/'+this.hotelRecibido.id).update(
      { vistas: (this.numeroViews - 1).toString()}
    );
    this.suscripcionResultadoConsultaFire.unsubscribe();
    this.viewCtrl.dismiss();
  }

}
