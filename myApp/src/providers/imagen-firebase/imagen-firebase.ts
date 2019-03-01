
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { LoadingController  } from 'ionic-angular';

@Injectable()
export class ImagenFirebaseProvider {
  
  imagenes:ArchivoSubir[] = [];

  constructor(
    private afDB: AngularFireDatabase,
    private loadingCtrl: LoadingController) {
 
  }

  

  cargar_imagen_firebase( archivo:ArchivoSubir ){

    try {
      let promesa = new Promise((resolve, reject)=>{
      let loading = this.loadingCtrl.create({
        content: "Espere por favor",
      });
      loading.present();
      let storRef = firebase.storage().ref();
      let nombreArchivo:string = new Date().valueOf().toString();

      let uploadTask: firebase.storage.UploadTask = 
        storRef.child(nombreArchivo+'.jpg')
        .putString( archivo.img+'', 'base64', { contentType: 'image/jpg' } );    
          uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED, 
            ( error ) => {
                loading.dismiss();
                console.log("Error en la carga");
                resolve();
            },
            ()=>{
              loading.dismiss();
              console.log('</b> Imagen cargada correctamente.');

              uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                this.crear_post(archivo.nombre, archivo.apellidos, downloadURL, nombreArchivo);
              }); 
              resolve();
            }
          )
    });
    return promesa;
    } catch (error) {
      console.log('Error al cargar la imagen');
    }

  }

  public crear_post( nombre:String, apellidos:String, url:String, nombreArchivo:String){
    console.log('crear_post');
    console.log(nombre);
    console.log(apellidos);
    let post: ArchivoSubir = {
      img: url,
      nombre: nombre,
      apellidos: apellidos,
      key: nombreArchivo,
    };
   
    try {
      this.afDB.object('/post/'+nombreArchivo).update(post);
      this.imagenes.push(post);
    } catch (error) {
      console.log('Error al publicar');
    }
  }  

  

}

export interface ArchivoSubir{
  nombre?: String;
  apellidos?:String;
  img?:String;
  key?: String;
  
}
