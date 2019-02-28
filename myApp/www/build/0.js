webpackJsonp([0],{

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenFormularioPageModule", function() { return ImagenFormularioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imagen_formulario__ = __webpack_require__(600);
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

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenFormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imagen_firebase_imagen_firebase__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camara_camara__ = __webpack_require__(108);
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
    function ImagenFormularioPage(navCtrl, navParams, imagenFirebaseProvider, camaraProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagenFirebaseProvider = imagenFirebaseProvider;
        this.camaraProvider = camaraProvider;
        this.nombre = "";
        this.apellidos = "";
        camaraProvider._imgPreview;
    }
    ImagenFormularioPage.prototype.mostrar_camara = function () {
        this.camaraProvider.mostrar_camara();
    };
    ImagenFormularioPage.prototype.seleccionar_foto = function () {
        this.camaraProvider.seleccionar_foto();
    };
    ImagenFormularioPage.prototype.publicar_post = function () {
        var archivo = {
            img: this.camaraProvider.imagen64,
            nombre: this.nombre,
            apellidos: this.apellidos,
        };
        this.imagenFirebaseProvider.cargar_imagen_firebase(archivo);
        this.camaraProvider._imgPreview = null;
    };
    ImagenFormularioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imagen-formulario',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\imagen-formulario\imagen-formulario.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cargar Imagen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Nombre: </ion-label>\n    <ion-input type="text" [(ngModel)]="nombre"></ion-input><br>\n  </ion-item>\n  <ion-item>\n    <ion-label>Apellidos: </ion-label>\n    <ion-input type="text" [(ngModel)]="apellidos"></ion-input><br>\n  </ion-item>\n  <ion-item *ngIf="camaraProvider._imgPreview">\n    <img [src]="camaraProvider._imgPreview" alt="">\n  </ion-item>\n\n  <button ion-button block round (click)="seleccionar_foto()">\n    Seleccionar de la galeria\n  </button>\n\n  <button ion-button block round (click)="mostrar_camara()">\n    Abrir camara\n  </button>\n\n  <button ion-button round icon-start color="secondary" (click)="publicar_post()" \n      [disabled]="nombre.length <= 0 || apellidos.length <= 0 || camaraProvider._imgPreview.length <= 0">\n    Guardar \n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\imagen-formulario\imagen-formulario.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_imagen_firebase_imagen_firebase__["a" /* ImagenFirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_imagen_firebase_imagen_firebase__["a" /* ImagenFirebaseProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_camara_camara__["a" /* CamaraProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_camara_camara__["a" /* CamaraProvider */]) === "function" && _d || Object])
    ], ImagenFormularioPage);
    return ImagenFormularioPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=imagen-formulario.js.map

/***/ })

});
//# sourceMappingURL=0.js.map