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



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MiAltotongaPage,
    BienvenidosPage
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
    TiendasPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MiAltotongaPage,
    BienvenidosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}