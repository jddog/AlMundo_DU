import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { listadoHotelesComponent } from '../../components/listadoHoteles/listadoHoteles';
import { filtroHotelesComponent } from '../../components/filtroHoteles/filtroHoteles';

@NgModule({
  declarations: [
    HomePage,
    listadoHotelesComponent,
    filtroHotelesComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage,
    listadoHotelesComponent,
    filtroHotelesComponent
  ]
})
export class HomePageModule {}
