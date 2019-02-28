
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { LoadingController  } from 'ionic-angular';
import { CamaraProvider } from '../camara/camara';


@Injectable()
export class ImagenFirebaseProvider {

  constructor(private fotos: CamaraProvider, 
    private afDB: AngularFireDatabase,
    private loadingCtrl: LoadingController) {
 
  }

  imagenes:ArchivoSubir[] = [];
  lastkey:String;

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
                resolve();
            },
            ()=>{
              loading.dismiss();
              console.log('</b> Imagen cargada correctamente.');

              uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                this.crear_post(archivo.nombre, archivo.apellidos, downloadURL, nombreArchivo);
                this.fotos._imgPreview="";
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

  private crear_post( nombre:String, apellidos:String, url:String, nombreArchivo:String){
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

  publicaciones: Observable<any[]>;
  obtenerImagenes() {
    try {
      this.publicaciones = this.afDB.list('post').valueChanges();
    } catch (error) {
      console.log('Error al obtener los datos');
    }
  }

}

export interface ArchivoSubir{
  nombre?: String;
  apellidos?:String;
  img?:String;
  key?: String;
  
}
