import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ImagenFirebaseProvider } from '../../providers/imagen-firebase/imagen-firebase';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-imagenes-firebase',
  templateUrl: 'imagenes-firebase.html',
})
export class ImagenesFirebasePage {
  imagenes: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public imagenFirebaseProvider: ImagenFirebaseProvider,
    private afDB: AngularFireDatabase,) {

      this.obtenerImagenes();
      
  }

  mostrarFormulario(){
    this.navCtrl.push('ImagenFormularioPage');
  }

  obtenerImagenes() {
    try {
      this.imagenes = this.afDB.list('post').valueChanges();
    } catch (error) {
      console.log('Error al obtener los datos');
    }
  }

}
