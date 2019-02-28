import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ImagenFirebaseProvider } from '../../providers/imagen-firebase/imagen-firebase';
import { CamaraProvider } from '../../providers/camara/camara';
import { Observable } from 'rxjs/observable';

@IonicPage()
@Component({
  selector: 'page-imagenes-firebase',
  templateUrl: 'imagenes-firebase.html',
})
export class ImagenesFirebasePage {
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public imagenFirebaseProvider: ImagenFirebaseProvider,
    public camaraProvider : CamaraProvider) {

      this.mostrarImagenes();
      
  }

  mostrarFormulario(){
    this.navCtrl.push('ImagenFormularioPage');
  }

  mostrarImagenes(){
    this.imagenFirebaseProvider.obtenerImagenes();
    this.items = this.imagenFirebaseProvider.publicaciones;
  }

}
