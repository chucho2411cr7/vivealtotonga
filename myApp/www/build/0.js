webpackJsonp([0],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenFormularioPageModule", function() { return ImagenFormularioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imagen_formulario__ = __webpack_require__(621);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImagenFormularioPageModule = /** @class */ (function () {
    function ImagenFormularioPageModule() {
    }
    ImagenFormularioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__imagen_formulario__["a" /* ImagenFormularioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__imagen_formulario__["a" /* ImagenFormularioPage */]),
            ],
        })
    ], ImagenFormularioPageModule);
    return ImagenFormularioPageModule;
}());

//# sourceMappingURL=imagen-formulario.module.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenFormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imagen_firebase_imagen_firebase__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImagenFormularioPage = /** @class */ (function () {
    function ImagenFormularioPage(navCtrl, navParams, imagenFirebaseProvider, camera, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagenFirebaseProvider = imagenFirebaseProvider;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.imagen64 = "";
        this.nombre = "";
        this.apellidos = "";
        this._imgPreview;
    }
    ImagenFormularioPage.prototype.mostrar_camara = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this._imgPreview = 'data:image/jpg;base64,' + imageData;
            _this.imagen64 = imageData;
        }, function (err) {
            console.log('Error de camara: ', JSON.stringify(err));
        });
    };
    ImagenFormularioPage.prototype.seleccionar_foto = function () {
        var _this = this;
        var opciones = {
            width: 800,
            height: 800,
            quality: 70,
            outputType: 1,
            maximumImagesCount: 1
        };
        this.imagePicker.getPictures(opciones).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this._imgPreview = 'data:image/jpg;base64,' + results[i];
                _this.imagen64 = results[i];
            }
        }, function (err) {
            console.log('Error en seleccionar la foto: ', JSON.stringify(err));
            console.log(JSON.stringify(err));
        });
    };
    ImagenFormularioPage.prototype.publicar_post = function () {
        var archivo = {
            img: this.imagen64,
            nombre: this.nombre,
            apellidos: this.apellidos,
        };
        this.imagenFirebaseProvider.cargar_imagen_firebase(archivo);
        this._imgPreview = null;
    };
    ImagenFormularioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imagen-formulario',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\imagen-formulario\imagen-formulario.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cargar Imagen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Nombre: </ion-label>\n    <ion-input type="text" [(ngModel)]="nombre"></ion-input><br>\n  </ion-item>\n  <ion-item>\n    <ion-label>Apellidos: </ion-label>\n    <ion-input type="text" [(ngModel)]="apellidos"></ion-input><br>\n  </ion-item>\n  <ion-item *ngIf="_imgPreview">\n    <img [src]="_imgPreview" alt="">\n  </ion-item>\n\n  <button ion-button block round (click)="seleccionar_foto()">\n    Seleccionar de la galeria\n  </button>\n\n  <button ion-button block round (click)="mostrar_camara()">\n    Abrir camara\n  </button>\n\n  <!-- [disabled]="nombre.length <= 0 || apellidos.length <= 0 || camaraProvider._imgPreview.length <= 0" -->\n  <button ion-button round icon-start color="secondary" (click)="publicar_post()" \n      >\n    Guardar \n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\imagen-formulario\imagen-formulario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_imagen_firebase_imagen_firebase__["a" /* ImagenFirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], ImagenFormularioPage);
    return ImagenFormularioPage;
}());

//# sourceMappingURL=imagen-formulario.js.map

/***/ })

});
//# sourceMappingURL=0.js.map