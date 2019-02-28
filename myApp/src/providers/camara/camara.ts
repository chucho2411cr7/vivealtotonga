
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';

@Injectable()
export class CamaraProvider {

  constructor(public camera: Camera,
    public  imagePicker: ImagePicker) {
    
  }

  public _imgPreview: String;
  public imagen64:String = "";

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

}
