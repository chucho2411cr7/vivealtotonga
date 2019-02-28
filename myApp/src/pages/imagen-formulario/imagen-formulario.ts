import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagenFirebaseProvider } from '../../providers/imagen-firebase/imagen-firebase';
import { CamaraProvider } from '../../providers/camara/camara';



@IonicPage()
@Component({
  selector: 'page-imagen-formulario',
  templateUrl: 'imagen-formulario.html',
})
export class ImagenFormularioPage {

  public nombre:String = "";
  public apellidos:String = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public imagenFirebaseProvider: ImagenFirebaseProvider,
    public camaraProvider: CamaraProvider) {

      camaraProvider._imgPreview;
  }

  mostrar_camara(){
    this.camaraProvider.mostrar_camara();
  }

  seleccionar_foto(){
    this.camaraProvider.seleccionar_foto();
  }

  publicar_post(){
    let archivo = {
      img: this.camaraProvider.imagen64,
      nombre: this.nombre,
      apellidos: this.apellidos,
    }
    this.imagenFirebaseProvider.cargar_imagen_firebase(archivo);
      this.camaraProvider._imgPreview = null; 
  }


}
