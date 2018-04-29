import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { listadoHotelesComponent } from '../../components/listadoHoteles/listadoHoteles';
import { filtroHotelesComponent } from '../../components/filtroHoteles/filtroHoteles';
import { detalleHotelComponent } from '../../components/detalleHotel/detalleHotel';

@NgModule({
  declarations: [
    HomePage,
    listadoHotelesComponent,
    filtroHotelesComponent,
    detalleHotelComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage,
    listadoHotelesComponent,
    filtroHotelesComponent,
    detalleHotelComponent
  ]
})
export class HomePageModule {}
