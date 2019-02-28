import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MiAltotongaPage} from '../pages/mi-altotonga/mi-altotonga';
import {PublicidadPageModule} from '../pages/publicidad/publicidad.module';
import {TurismoPageModule} from '../pages/turismo/turismo.module';
import {GastronomiaPageModule} from '../pages/gastronomia/gastronomia.module';
import {HistoriaPageModule} from '../pages/historia/historia.module';
import {AltotongaPageModule} from '../pages/altotonga/altotonga.module';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HoteleriaPageModule } from '../pages/hoteleria/hoteleria.module';
import { RestaurantesPageModule } from '../pages/restaurantes/restaurantes.module';
import { GimnasiosPageModule } from '../pages/gimnasios/gimnasios.module';
import { SitioPageModule } from '../pages/sitio/sitio.module';
import { AntrosPageModule } from '../pages/antros/antros.module';
import { TiendasPageModule } from '../pages/tiendas/tiendas.module';
import {BienvenidosPage} from '../pages/bienvenidos/bienvenidos';
import { ImagenFirebaseProvider } from '../providers/imagen-firebase/imagen-firebase';
import { CamaraProvider } from '../providers/camara/camara';
import { ImagenesFirebasePage } from '../pages/imagenes-firebase/imagenes-firebase';


import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyA818ZDqOYcTDseyrnZxKCn1qQxbyRHG0k",
    authDomain: "altotonga-6be61.firebaseapp.com",
    databaseURL: "https://altotonga-6be61.firebaseio.com",
    projectId: "altotonga-6be61",
    storageBucket: "altotonga-6be61.appspot.com",
    messagingSenderId: "588659933911"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MiAltotongaPage,
    BienvenidosPage,
    ImagenesFirebasePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PublicidadPageModule,
    TurismoPageModule,
    GastronomiaPageModule,
    HistoriaPageModule,
    AltotongaPageModule,
    HoteleriaPageModule,
    RestaurantesPageModule,
    GimnasiosPageModule,
    SitioPageModule,
    AntrosPageModule,
    TiendasPageModule, 

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MiAltotongaPage, 
    BienvenidosPage,
    ImagenesFirebasePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagenFirebaseProvider,
    CamaraProvider,
    Camera,
    ImagePicker,
  ]
})
export class AppModule {}
