import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HoteleriaPage } from '../hoteleria/hoteleria';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { GimnasiosPage } from '../gimnasios/gimnasios';
import { SitioPage } from '../sitio/sitio';
import { AntrosPage } from '../antros/antros';
import { TiendasPage } from '../tiendas/tiendas';

/**
 * Generated class for the PublicidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicidad',
  templateUrl: 'publicidad.html',
})
export class PublicidadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  hoteleria():void{
    this.navCtrl.push(HoteleriaPage)
  }

  restaurantes():void{
    this.navCtrl.push(RestaurantesPage)
  }

  gimnasios():void{
    this.navCtrl.push(GimnasiosPage)
  }

  sitios():void{
    this.navCtrl.push(SitioPage)
  }

  antros():void{
    this.navCtrl.push(AntrosPage)
  }

  tiendas():void{
    this.navCtrl.push(TiendasPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicidadPage');
  }

}
