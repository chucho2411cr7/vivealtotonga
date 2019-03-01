import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagenFirebaseProvider } from '../../providers/imagen-firebase/imagen-firebase';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';



@IonicPage()
@Component({
  selector: 'page-imagen-formulario',
  templateUrl: 'imagen-formulario.html',
})
export class ImagenFormularioPage {

  public nombre:String = "";
  public apellidos:String = "";
  public _imgPreview: String ="";
  public imagen64:String = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public imagenFirebaseProvider: ImagenFirebaseProvider,
    
    public camera: Camera,
    public  imagePicker: ImagePicker,
    ) {

      this._imgPreview;
  }

  mostrar_camara(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG, 
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this._imgPreview = 'data:image/jpg;base64,' + imageData;
      this.imagen64 = imageData;

    }, (err) => {
     console.log('Error de camara: ', JSON.stringify(err));
    });
  }

  seleccionar_foto(){
    let opciones:ImagePickerOptions = {
      width: 800,
      height: 800,
      quality: 70,
      outputType: 1,
      maximumImagesCount: 1
    }
    this.imagePicker.getPictures(opciones).then((results) => {
      for (var i = 0; i < results.length; i++) {
          this._imgPreview = 'data:image/jpg;base64,' + results[i];
          this.imagen64 = results[i];
      }
    }, (err) => { 
      console.log('Error en seleccionar la foto: ', JSON.stringify(err));
      console.log(JSON.stringify(err));
    });
  }

  publicar_post(){
    let archivo = {
      img: this.imagen64,
      nombre: this.nombre,
      apellidos: this.apellidos,
    }
    this.imagenFirebaseProvider.cargar_imagen_firebase(archivo);
      this._imgPreview = null; 
  }


}
