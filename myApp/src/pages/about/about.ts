import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TerminosPage } from '../terminos/terminos';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  terminos(){
    this.navCtrl.push(TerminosPage);
  }

}
