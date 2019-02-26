import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PublicidadPage} from '../publicidad/publicidad';
import {TurismoPage} from '../turismo/turismo';
import {GastronomiaPage} from '../gastronomia/gastronomia';
import { HistoriaPage } from '../historia/historia';
import { AltotongaPage } from '../altotonga/altotonga';
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
    }

    publicidad():void{
      this.navCtrl.push(PublicidadPage);

  }

  inicio(){
    this.navCtrl.push(HomePage);

}

sobre(){
  this.navCtrl.push(AboutPage);
}

  turismo():void{
    this.navCtrl.push(TurismoPage);

}
gastronomia():void{
  this.navCtrl.push(GastronomiaPage);
}
historia():void{
  this.navCtrl.push(HistoriaPage);
}
altotonga():void{
  this.navCtrl.push(AltotongaPage);
}
}
