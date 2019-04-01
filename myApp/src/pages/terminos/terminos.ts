import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminos',
  templateUrl: 'terminos.html',
})
export class TerminosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminosPage');
  }

  alertabasica(){
    let mialerta = this.alerta.create({
      title:'Fotografías',
      message:'Para anexar imagenes se recomienda que sea de algun atractivo turístico de la zona de Altotonga(paisaje, gastronomía, etc). De otra manera si la imagen contiene denigra la integridad de las personas o contiene material no apto la imagen sera borrada.',
      buttons:['Entendido']
    });
    mialerta.present();
  }

  camara(){
    let mialerta2 = this.alerta.create({
      title:'Cámara',
      message:'Para agregar una foto se podra hacer uso de la cámara del dispositivo.',
      buttons:['Entendido']
    });
    mialerta2.present();
  }
  
  internet(){
    let mialerta3 = this.alerta.create({
      title:'Internet',
      message:'Es de suma importancia que la aplicación cuente con acceso a internet o datos móviles, ya que algunos datos se muestran en tiempo real (imagenes), los datos serán reflejados inmediatamente en la aplicación sin necesidad de alguna actualización o reiniciar la app.',
      buttons:['Entendido']
    });
    mialerta3.present();
  }

  inicio(){
    let mialerta4 = this.alerta.create({
      title:'Inicio',
      message:'El inicio consta de 5 apartados diferentes(Altotonga, Historia, Gastronomía, Publicidad y Turismo), las cuales mostrarán información dependiendo del apartado seleccionado.',
      buttons:['Entendido']
    });
    mialerta4.present();
  }

  galeria(){
    let mialerta5 = this.alerta.create({
      title:'Galería',
      message:'La aplicación hara uso de la galería, en la cual podra seleccionar alguna imagen para postearla.',
      buttons:['Entendido']
    });
    mialerta5.present();
  }

  derechos(){
    let mialerta6 = this.alerta.create({
      title:'Drechos de autor',
      message:'Aplicación desarrollada por los ingenieros Jesús García Ventura, Sergio Hernández Gonzalez y Juan Pablo Abad Arcos. <br> Toda la aplicación en general(imagenes, diseño, logica e información) están reservadas, si por algún motivo se detecta robó o plagio de información se tomarán las medidas correspondientes.',
      buttons:['Entendido']
    });
    mialerta6.present();
  }

}
