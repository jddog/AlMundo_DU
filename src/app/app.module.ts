import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

/*fire base references*/
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { listadoHotelesComponent } from '../components/listadoHoteles/listadoHoteles';
import { filtroHotelesComponent } from '../components/filtroHoteles/filtroHoteles';
import { detalleHotelComponent } from '../components/detalleHotel/detalleHotel';

/*Extras*/
import { VirtualListModule } from 'angular-virtual-list';

/*Fire Base*/
const firebaseConfig = {
  apiKey: "AIzaSyDc9e9hoBxcJcJLF9he5xNSQ4gxZk4J_-U",
  authDomain: "almundohotelsdu.firebaseapp.com",
  databaseURL: "https://almundohotelsdu.firebaseio.com",
  projectId: "almundohotelsdu",
  storageBucket: "almundohotelsdu.appspot.com",
  messagingSenderId: "8960798966"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    listadoHotelesComponent,
    filtroHotelesComponent,
    detalleHotelComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    VirtualListModule,
    JsonpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    listadoHotelesComponent,
    filtroHotelesComponent,
    detalleHotelComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
