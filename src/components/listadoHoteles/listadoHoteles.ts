import { Component, Input } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

/*componente detalle del hotel*/
import { detalleHotelComponent } from '../../components/detalleHotel/detalleHotel';

/*Models*/
import { Hotel } from '../../models/hotel';
import { Filtro } from '../../models/filtro';

/* firebase*/
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'component-listadoHoteles',
  templateUrl: 'listadoHoteles.html'
})
export class listadoHotelesComponent  {
  @Input() hotelRecibido: Hotel;
  fakeArray = new Array(4);
  suscri : any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public afd: AngularFireDatabase) {
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  verDetalleHotel(){
    var resultadoConsultaFire : any = this.afd.object('viewsHotels/'+this.hotelRecibido.id).valueChanges();
    var numeroViews : any;
    var hotelDetalleModal: any;
    var suscripcionResultadoConsultaFire = resultadoConsultaFire.subscribe(resp =>{

      if(resp != undefined && resp != null)
      {
        var vistasFire: number = Number(resp.vistas);
        numeroViews = vistasFire +1;
      }
      else
      {
        numeroViews = 1
      }
     

      hotelDetalleModal = this.modalCtrl.create(detalleHotelComponent, { hotel: this.hotelRecibido, vistas : numeroViews },{enableBackdropDismiss : false});
      hotelDetalleModal.present();
      suscripcionResultadoConsultaFire.unsubscribe();

      hotelDetalleModal.onDidDismiss(data => {
        console.log(data);
      });
  
    });
  }

}
