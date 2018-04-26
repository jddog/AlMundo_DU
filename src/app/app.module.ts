import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { listadoHotelesComponent } from '../components/listadoHoteles/listadoHoteles';
import { filtroHotelesComponent } from '../components/filtroHoteles/filtroHoteles';

/*Providers*/
//import { API_AlMundoProvider } from '../providers/API_AlMundo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    listadoHotelesComponent,
    filtroHotelesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    listadoHotelesComponent,
    filtroHotelesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //API_AlMundoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
