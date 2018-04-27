import { Component } from '@angular/core';
import { NavController, ToastController  } from 'ionic-angular';

/*Models*/
import { Filtro } from '../../models/filtro';
import { Hotel } from '../../models/hotel';

/*Providers*/
import { API_AlMundoProvider } from '../../providers/API_AlMundo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [API_AlMundoProvider]
})
export class HomePage {

 public filtrosRecibidos: Filtro; 
 public listHotels: Array<Hotel> = new Array<Hotel>();
 public listHotelsOriginal: Array<Hotel> = new Array<Hotel>();

  constructor(public navCtrl: NavController, 
              public API_AlMundo: API_AlMundoProvider,
              private toastCtrl: ToastController) {

    this.API_AlMundo.getListhotels()
    .subscribe(response => {
      this.listHotels = response;
      this.listHotelsOriginal = response;
    });
  }

  obtenerFiltros(event):void{
    this.listHotels = this.listHotelsOriginal
    this.filtrosRecibidos = event;
    this.listHotels = this.listHotels.filter(f => (this.filtrosRecibidos.nombreHotel != "" && f.name.toLowerCase().indexOf(this.filtrosRecibidos.nombreHotel.toLowerCase()) !== -1
      || this.filtrosRecibidos.nombreHotel =="" && f.name != "")
      && ((f.stars == this.filtrosRecibidos.estrellas) 
      || (this.filtrosRecibidos.estrellas == -1 && f.stars != -1)));

      this.mostrarToast("Filtros aplicados correctamente");
  }

  mostrarToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
}
