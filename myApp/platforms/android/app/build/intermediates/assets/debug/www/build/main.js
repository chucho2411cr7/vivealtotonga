webpackJsonp([4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenesFirebasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imagen_firebase_imagen_firebase__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camara_camara__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagenesFirebasePage = /** @class */ (function () {
    function ImagenesFirebasePage(navCtrl, navParams, imagenFirebaseProvider, camaraProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagenFirebaseProvider = imagenFirebaseProvider;
        this.camaraProvider = camaraProvider;
        this.mostrarImagenes();
    }
    ImagenesFirebasePage.prototype.mostrarFormulario = function () {
        this.navCtrl.push('ImagenFormularioPage');
    };
    ImagenesFirebasePage.prototype.mostrarImagenes = function () {
        this.imagenFirebaseProvider.obtenerImagenes();
        this.items = this.imagenFirebaseProvider.publicaciones;
    };
    ImagenesFirebasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imagenes-firebase',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\imagenes-firebase\imagenes-firebase.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lista de Imágenes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button class="bd-color" ion-item (click)="mostrarFormulario()">\n    Cargar Imagen\n  </button>\n  <br><br>\n  <button class="bd-color" ion-item (click)="mostrarImagenes()">\n    Mostrar imágenes\n  </button>\n\n  <ion-card *ngFor="let item of items | async">\n  \n      <img cache style="width: 250px; height: 200px;" [src]="item.img">\n  \n      <ion-card-content>\n        <ion-card-title>\n          Nombre: <b>{{ item.nombre }}</b><hr><br>\n          Apellidos: {{ item.apellidos }}\n        </ion-card-title>\n      </ion-card-content>\n  \n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\imagenes-firebase\imagenes-firebase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_imagen_firebase_imagen_firebase__["a" /* ImagenFirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_camara_camara__["a" /* CamaraProvider */]])
    ], ImagenesFirebasePage);
    return ImagenesFirebasePage;
}());

//# sourceMappingURL=imagenes-firebase.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicidad_publicidad__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__turismo_turismo__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gastronomia_gastronomia__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historia_historia__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__altotonga_altotonga__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.publicidad = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__publicidad_publicidad__["a" /* PublicidadPage */]);
    };
    HomePage.prototype.inicio = function () {
        this.navCtrl.push(HomePage_1);
    };
    HomePage.prototype.sobre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.turismo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__turismo_turismo__["a" /* TurismoPage */]);
    };
    HomePage.prototype.gastronomia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gastronomia_gastronomia__["a" /* GastronomiaPage */]);
    };
    HomePage.prototype.historia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__historia_historia__["a" /* HistoriaPage */]);
    };
    HomePage.prototype.altotonga = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__altotonga_altotonga__["a" /* AltotongaPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>Vive Altotonga</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="danger">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar >\n\n  </ion-header>\n\n  <ion-content class="bd-color">\n\n    <ion-list class="bd-color">\n\n      <button class="bd-color" ion-item (click)="inicio()">\n\n        Inicio\n\n      </button>\n\n      <button class="bd-color" ion-item (click)="sobre()">\n\n        ¿Quienes somos?\n\n      </button>\n\n      <button class="bd-color" ion-item (click)="openPage(eventsPage)">\n\n        Bienvenido!\n\n      </button>\n\n      <button class="bd-color" ion-item (click)="closeMenu()">\n\n        Close Menu\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n\n\n<ion-content padding class="bd-color">   <!--bg-image-->\n\n\n\n    <ion-card (click)="altotonga()">\n\n        <ion-card-content>\n\n            <img src="assets/imgs/vive.png"/>\n\n        </ion-card-content>\n\n        <h1 text-center>\n\n          <a> Vive Altotonga</a>\n\n          <ion-icon name=\'ios-navigate\' color="primary"> </ion-icon>\n\n        </h1>\n\n      </ion-card>\n\n\n\n  <ion-grid >\n\n    <ion-row>\n\n      <ion-col>\n\n          <ion-card (click)="publicidad()">\n\n              <ion-card-content>\n\n                  <img src="assets/imgs/publi.jpg" />\n\n                  <hr>\n\n                  <p text-center>\n\n                    <b>\n\n                      <a>Publicidad</a>\n\n                      <ion-icon name=\'ios-navigate\' color="primary"> </ion-icon>\n\n                    </b>\n\n                  </p>\n\n              </ion-card-content>\n\n            </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n          <ion-card (click)="turismo()">\n\n              <ion-card-content>\n\n                  <img src="assets/imgs/turismo.jpg"/>\n\n                  <hr>\n\n                  <p text-center>\n\n                    <b>\n\n                      <a>Turismo</a>\n\n                      <ion-icon name=\'ios-navigate\' color="primary"> </ion-icon>\n\n                    </b>\n\n                  </p>\n\n              </ion-card-content>\n\n            </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card (click)="historia()">\n\n                <ion-card-content>\n\n                    <img src="assets/imgs/histo.png"/>\n\n                    <hr>\n\n                    <p text-center>\n\n                      <b>\n\n                        <a>Historia</a>\n\n                        <ion-icon name=\'ios-navigate\' color="primary"> </ion-icon>\n\n                      </b>\n\n                    </p>\n\n                </ion-card-content>\n\n              </ion-card>\n\n        </ion-col> \n\n      <ion-col>\n\n          <ion-card (click)="gastronomia()">\n\n              <ion-card-content>\n\n                  <img src="assets/imgs/gastro.png"/>\n\n                  <hr>\n\n                  <p text-center>\n\n                    <b>\n\n                      <a>Gastronomía</a>\n\n                      <ion-icon name=\'ios-navigate\' color="primary"> </ion-icon>\n\n                    </b>\n\n                  </p>\n\n              </ion-card-content>\n\n            </ion-card>\n\n      </ion-col>\n\n         \n\n    </ion-row>\n\n    \n\n  </ion-grid>  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>\n\n      Información\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar color="danger">\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar >\n\n    </ion-header>\n\n    <ion-content class="bd-color">\n\n      <ion-list class="bd-color">\n\n        <button class="bd-color" ion-item (click)="inicio()">\n\n          Inicio\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="sobre()">\n\n          ¿Quienes somos?\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="openPage(eventsPage)">\n\n          Bienvenido!\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="closeMenu()">\n\n          Close Menu\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  \n\n\n\n<ion-content padding class="bd-color">\n\n  <ion-card>\n\n\n\n    <img src="assets/imgs/pancho.jpg">\n\n    <ion-fab right top>\n\n      <button ion-fab>\n\n        <ion-icon name="pin"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  \n\n    <ion-item>\n\n      <ion-icon name="md-send" item-start large></ion-icon>\n\n      <h2>Altotonga, Veracruz</h2>\n\n     \n\n    </ion-item>\n\n  \n\n   \n\n    \n\n  \n\n  </ion-card>  \n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n     <b>Bienvenidos a "Vive Altotonga"</b> \n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Aplicación oficial de <b>vivealtotonga.com </b> desarrollada por <b>Top Software</b>.\n\n      Aplicación desarrollada con la finalidad de promover la zona de Altotonga con su diversidad cultural,\n\n      gastronómica, turística, etc. <br>\n\n      <br>\n\n      Sean Bienvenidos.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header text-uppercase text-center color="primary">\n\n     <b>Contáctanos</b> \n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-grid fixed>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <div>\n\n              <a href="http://vivealtotonga.com.mx/" ion-button round color="mail">\n\n                <ion-icon name="md-globe"></ion-icon>\n\n              </a>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <div>\n\n              <a href="" ion-button round color="facebook">\n\n                <ion-icon name="logo-facebook"></ion-icon>\n\n              </a>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <div>\n\n              <a href="" ion-button round color="instagram">\n\n                <ion-icon name="logo-instagram"></ion-icon>\n\n              </a>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <div>\n\n              <a href="" ion-button round color="light">\n\n                <ion-icon name="md-mail"></ion-icon>\n\n              </a>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n     \n\n\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamaraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CamaraProvider = /** @class */ (function () {
    function CamaraProvider(camera, imagePicker) {
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.imagen64 = "";
    }
    CamaraProvider.prototype.mostrar_camara = function () {
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
    CamaraProvider.prototype.seleccionar_foto = function () {
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
    CamaraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], CamaraProvider);
    return CamaraProvider;
}());

//# sourceMappingURL=camara.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenFirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__camara_camara__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImagenFirebaseProvider = /** @class */ (function () {
    function ImagenFirebaseProvider(fotos, afDB, loadingCtrl) {
        this.fotos = fotos;
        this.afDB = afDB;
        this.loadingCtrl = loadingCtrl;
        this.imagenes = [];
    }
    ImagenFirebaseProvider.prototype.cargar_imagen_firebase = function (archivo) {
        var _this = this;
        try {
            var promesa = new Promise(function (resolve, reject) {
                var loading = _this.loadingCtrl.create({
                    content: "Espere por favor",
                });
                loading.present();
                var storRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
                var nombreArchivo = new Date().valueOf().toString();
                var uploadTask = storRef.child(nombreArchivo + '.jpg')
                    .putString(archivo.img + '', 'base64', { contentType: 'image/jpg' });
                uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (error) {
                    loading.dismiss();
                    resolve();
                }, function () {
                    loading.dismiss();
                    console.log('</b> Imagen cargada correctamente.');
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        _this.crear_post(archivo.nombre, archivo.apellidos, downloadURL, nombreArchivo);
                        _this.fotos._imgPreview = "";
                    });
                    resolve();
                });
            });
            return promesa;
        }
        catch (error) {
            console.log('Error al cargar la imagen');
        }
    };
    ImagenFirebaseProvider.prototype.crear_post = function (nombre, apellidos, url, nombreArchivo) {
        var post = {
            img: url,
            nombre: nombre,
            apellidos: apellidos,
            key: nombreArchivo,
        };
        try {
            this.afDB.object('/post/' + nombreArchivo).update(post);
            this.imagenes.push(post);
        }
        catch (error) {
            console.log('Error al publicar');
        }
    };
    ImagenFirebaseProvider.prototype.obtenerImagenes = function () {
        try {
            this.publicaciones = this.afDB.list('post').valueChanges();
        }
        catch (error) {
            console.log('Error al obtener los datos');
        }
    };
    ImagenFirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__camara_camara__["a" /* CamaraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
    ], ImagenFirebaseProvider);
    return ImagenFirebaseProvider;
}());

//# sourceMappingURL=imagen-firebase.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiAltotongaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MiAltotongaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiAltotongaPage = /** @class */ (function () {
    function MiAltotongaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MiAltotongaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MiAltotongaPage');
    };
    MiAltotongaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mi-altotonga',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\mi-altotonga\mi-altotonga.html"*/'<!--\n\n  Generated template for the MiAltotongaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>MiAltotonga</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bd-color">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\mi-altotonga\mi-altotonga.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MiAltotongaPage);
    return MiAltotongaPage;
}());

//# sourceMappingURL=mi-altotonga.js.map

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 237;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/altotonga/altotonga.module": [
		279
	],
	"../pages/antros/antros.module": [
		281
	],
	"../pages/bienvenidos/bienvenidos.module": [
		617,
		3
	],
	"../pages/gastronomia/gastronomia.module": [
		292
	],
	"../pages/gimnasios/gimnasios.module": [
		293
	],
	"../pages/historia/historia.module": [
		294
	],
	"../pages/hoteleria/hoteleria.module": [
		316
	],
	"../pages/imagen-formulario/imagen-formulario.module": [
		618,
		0
	],
	"../pages/imagenes-firebase/imagenes-firebase.module": [
		620,
		2
	],
	"../pages/mi-altotonga/mi-altotonga.module": [
		619,
		1
	],
	"../pages/publicidad/publicidad.module": [
		317
	],
	"../pages/restaurantes/restaurantes.module": [
		321
	],
	"../pages/sitio/sitio.module": [
		318
	],
	"../pages/tiendas/tiendas.module": [
		319
	],
	"../pages/turismo/turismo.module": [
		320
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 278;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltotongaPageModule", function() { return AltotongaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__altotonga__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AltotongaPageModule = /** @class */ (function () {
    function AltotongaPageModule() {
    }
    AltotongaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__altotonga__["a" /* AltotongaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__altotonga__["a" /* AltotongaPage */]),
            ],
        })
    ], AltotongaPageModule);
    return AltotongaPageModule;
}());

//# sourceMappingURL=altotonga.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltotongaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AltotongaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AltotongaPage = /** @class */ (function () {
    function AltotongaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AltotongaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AltotongaPage');
    };
    AltotongaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-altotonga',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\altotonga\altotonga.html"*/'<!--\n\n  Generated template for the AltotongaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Altotonga</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar color="danger">\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar >\n\n    </ion-header>\n\n    <ion-content class="bd-color">\n\n      <ion-list class="bd-color">\n\n        <button class="bd-color" ion-item (click)="inicio()">\n\n          Inicio\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="sobre()">\n\n          ¿Quienes somos?\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="openPage(eventsPage)">\n\n          Bienvenido!\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="closeMenu()">\n\n          Close Menu\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  \n\n\n\n\n\n<ion-content padding class="bd-color">\n\n\n\n    <ion-slides pager="true" effect="cube">\n\n\n\n        <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n          <h2>Parroquia Santa María Magdalena</h2>\n\n          <img src="assets/imgs/altotonga.jpg" >\n\n        </ion-slide>\n\n      \n\n        <ion-slide style="background-color: rgb(255, 230, 0)">\n\n          <h2>Altotonga</h2>\n\n          <img src="assets/imgs/ALTOTONGA4.jpg" >\n\n        </ion-slide>\n\n      \n\n        <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n          <h2>Entrada Altotonga</h2>\n\n          <img src="assets/imgs/altotonga5.jpg" >\n\n        </ion-slide>\n\n      \n\n        <ion-slide style="background-color: rgb(255, 230, 0)">\n\n            <h2>Cascada</h2>\n\n            <img src="assets/imgs/rio15.jpg" >\n\n          </ion-slide>\n\n\n\n          <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n              <h2>Pancho Poza</h2>\n\n              <img src="assets/imgs/rio222.jpg" >\n\n            </ion-slide>\n\n\n\n      </ion-slides>\n\n\n\n      <ion-card color="mail">\n\n        <ion-card-header text-center >\n\n          <b>Altotonga, Veracruz.</b>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          El municipio de Altotonga se encuentra en la parte central del estado de Veracruz (Ver). \n\n          Su distancia a la capital del estado es de 80 kilómetros. Debido a su posición geográfica, \n\n          se encuentra situado entre las coordenadas 19° 46\' latitud norte y entre 97° 15\' logitud \n\n          oeste. La superficie territorial de Altotonga es de 375.08 kilómetros cuadrados. \n\n          Debido a la variedad de elevaciones que se pueden encontrar en dicho lugar, se ubica a \n\n          una altura promedio de 1,880 metros sobre el nivel del mar. El INEGI llevó a cabo el conteo\n\n           de población y vivienda durante el 2010 en todos los estados y municipios del país e \n\n           informó que de acuerdo a los resultados obtenidos, \n\n          el municipio de Altotonga está formado por una población total de 60,400.\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <!--lista-->\n\n      <ion-card color="primary">\n\n        <ion-card-header>\n\n          Información \n\n        </ion-card-header>\n\n      \n\n        <ion-list>\n\n          <button ion-item>\n\n            <ion-icon name="cloudy" item-start></ion-icon>\n\n            <b>Clima</b><br>\n\n            Varios tipos de clima el semicálido húmedo\n\n            con lluvias, temperatura anual media entre los 12 y los 24 °C.\n\n          </button>\n\n      \n\n          <button ion-item>\n\n            <ion-icon name="man" item-start></ion-icon>\n\n            <b>Demografía</b><br>\n\n            60, 396 Habitantes\n\n          </button>\n\n      \n\n          <button ion-item>\n\n            <ion-icon name="home" item-start></ion-icon>\n\n            <b>Localidades</b><br>\n\n            94 Localidades\n\n          </button>\n\n      \n\n          <button ion-item>\n\n            <ion-icon name="browsers" item-start></ion-icon>\n\n            <b>Superficie</b><br>\n\n            328.66 km²\n\n          </button>\n\n      \n\n          <button ion-item>\n\n            <ion-icon name="compass" item-start></ion-icon>\n\n            <b>Localización</b><br>\n\n            Entre los paralelos 19° 38’ y 19°54 \n\n          </button>\n\n      \n\n                \n\n        </ion-list>\n\n      </ion-card>\n\n     <!--lista-->\n\n\n\n      \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\altotonga\altotonga.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AltotongaPage);
    return AltotongaPage;
}());

//# sourceMappingURL=altotonga.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntrosPageModule", function() { return AntrosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__antros__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AntrosPageModule = /** @class */ (function () {
    function AntrosPageModule() {
    }
    AntrosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__antros__["a" /* AntrosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__antros__["a" /* AntrosPage */]),
            ],
        })
    ], AntrosPageModule);
    return AntrosPageModule;
}());

//# sourceMappingURL=antros.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AntrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AntrosPage = /** @class */ (function () {
    function AntrosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AntrosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AntrosPage');
    };
    AntrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-antros',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\antros\antros.html"*/'<!--\n\n  Generated template for the AntrosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Antros</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bd-color">\n\n  <ion-card color="mail">\n\n    <img src="assets/imgs/luxor.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title text-right>\n\n        Antro "Luxor"\n\n        </ion-card-title>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card color="mail">\n\n        <ion-card-content>\n\n          <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n          Luxor antro, bar y karaoke se encuentra a un costado de bodega Aurrera, cuenta con una gran variedad de bebidas, noches especiales, karaoke y bartender.<br>\n\n          <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n          <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Mariano Abasolo, No. 40. <br>\n\n\n\n          <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 00 000 000 00 00<br>\n\n\n\n          <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> viernes 09:00pm–01:00am<br>\n\n          sábado 10:00pm–04:00am<br>\n\n          \n\n\n\n          <ion-icon name="logo-facebook" color="facebook"> <a href="https://www.facebook.com/profile.php?id=100009390463088"><b>Facebook:https://www.facebook.com/profile.php?id=100009390463088</b>  </a></ion-icon><br>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!--antro2-->\n\n\n\n<ion-card color="mail">\n\n  <img src="assets/imgs/porfi.jpg"/>\n\n  <ion-card-content>\n\n    <ion-card-title text-right>\n\n     Antro "Porfiriato club"\n\n      </ion-card-title>\n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card color="mail">\n\n      <ion-card-content>\n\n        <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n        Porfiriato Club se enceuntra en la zona centro de Altotonga, cuenta con una gran variedad de bebidas y promociones.<br>\n\n        <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n        <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Salvador Diaz Mirón, No. 38, 93700 Altotonga, Ver.<br>\n\n\n\n        <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 00 000 000 0000\n\n        <br>\n\n\n\n        <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> viernes 09:00pm–01:00am<br>\n\n        sábado 10:00pm–03:00am<br>\n\n\n\n        <ion-icon name="logo-facebook" color="facebook"> <a href="https://www.facebook.com/pages/El-Porfiriato-Altotonga/749107261825633"><b>Facebook:https://www.facebook.com/pages/El-Porfiriato-Altotonga/749107261825633</b>  </a></ion-icon><br>\n\n     \n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\antros\antros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AntrosPage);
    return AntrosPage;
}());

//# sourceMappingURL=antros.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicidadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoteleria_hoteleria__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurantes_restaurantes__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gimnasios_gimnasios__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sitio_sitio__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__antros_antros__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tiendas_tiendas__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the PublicidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicidadPage = /** @class */ (function () {
    function PublicidadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PublicidadPage.prototype.hoteleria = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hoteleria_hoteleria__["a" /* HoteleriaPage */]);
    };
    PublicidadPage.prototype.restaurantes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__restaurantes_restaurantes__["a" /* RestaurantesPage */]);
    };
    PublicidadPage.prototype.gimnasios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gimnasios_gimnasios__["a" /* GimnasiosPage */]);
    };
    PublicidadPage.prototype.sitios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sitio_sitio__["a" /* SitioPage */]);
    };
    PublicidadPage.prototype.antros = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__antros_antros__["a" /* AntrosPage */]);
    };
    PublicidadPage.prototype.tiendas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tiendas_tiendas__["a" /* TiendasPage */]);
    };
    PublicidadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublicidadPage');
    };
    PublicidadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-publicidad',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\publicidad\publicidad.html"*/'<!--\n\n  Generated template for the PublicidadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title text-center>Publicidad</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bd-color">\n\n  <ion-card text-center color="danger">\n\n    <img src="assets/imgs/megafono.jpg" height="170px"/>\n\n    <ion-card-header >\n\n      Publicidad Lista\n\n    </ion-card-header>\n\n  \n\n    <ion-list>\n\n      <button ion-item (click)="hoteleria()">\n\n        <ion-icon name="calculator" item-start text-center color="hot"></ion-icon>\n\n        Hoteleria\n\n      </button>\n\n  \n\n      <button ion-item (click)="restaurantes()">\n\n        <ion-icon name="pizza" item-start text-center color="mail"></ion-icon>\n\n        Restaurantes\n\n      </button>\n\n  \n\n      <button ion-item (click)="gimnasios()">\n\n        <ion-icon name="heart" item-start text-center color="danger"></ion-icon>\n\n        Gimnasios\n\n      </button>\n\n  \n\n      <button ion-item (click)="sitios()">\n\n        <ion-icon name="pin" item-start text-center color="primary"></ion-icon>\n\n         Sitios recreativos\n\n      </button>\n\n  \n\n      <button ion-item (click)="antros()">\n\n        <ion-icon name="wine" item-start text-center color="vino"></ion-icon>\n\n        Antros\n\n      </button>\n\n  \n\n      <button ion-item (click)="tiendas()">\n\n        <ion-icon name="cart" item-start></ion-icon>\n\n        Tiendas comerciales\n\n      </button>\n\n  \n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\publicidad\publicidad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PublicidadPage);
    return PublicidadPage;
}());

//# sourceMappingURL=publicidad.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoteleriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HoteleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HoteleriaPage = /** @class */ (function () {
    function HoteleriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HoteleriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HoteleriaPage');
    };
    HoteleriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hoteleria',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\hoteleria\hoteleria.html"*/'<!--\n\n  Generated template for the HoteleriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Hoteleria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!--hotel1-->\n\n<ion-content padding class="bd-color">\n\n  <ion-card color="mail">\n\n    <img src="assets/imgs/urcid.jpeg"/>\n\n    <ion-card-content>\n\n      <ion-card-title text-right>\n\n        Hotel Urcid\n\n        </ion-card-title>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card color="mail">\n\n        <ion-card-content>\n\n          <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n          Hotel Urcid se encuentra en la zona centro de Altotonga, cuenta con cable de paga, baños plus, internet y estacionamiento.<br>\n\n          <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n          <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Nicolás Bravo 15, Centro, 91320 Altotonga, Ver.<br>\n\n\n\n          <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 0229<br>\n\n\n\n          <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> 24 horas<br>\n\n\n\n          <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!--hotel2-->\n\n\n\n  <ion-slides pager="true" effect="coverflow">\n\n\n\n      <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n        <h2>Hotel El Campanario</h2>\n\n        <img src="assets/imgs/campanario.jpeg"/>\n\n      </ion-slide>\n\n    \n\n      <ion-slide style="background-color: rgb(255, 230, 0)">\n\n        <h2>Sala</h2>\n\n        <img src="assets/imgs/campanario1.jpg"/>\n\n      </ion-slide>\n\n    \n\n      <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n        <h2>Recamaras</h2>\n\n        <img src="assets/imgs/campanario2.jpg"/>\n\n      </ion-slide>\n\n        \n\n    </ion-slides>\n\n\n\n  <ion-card color="mail">\n\n      <ion-card-content>\n\n        <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n        Hotel El Campanario se encuentra en la zona centro de Altotonga, cuenta con cable de paga, baños plus, internet y estacionamiento.<br>\n\n        <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n        <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Nicolás Bravo 3BIS, Vereda, Centro, 91320 Altotonga, Ver.<br>\n\n\n\n        <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 0514<br>\n\n\n\n        <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> 24 horas<br>\n\n\n\n        <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<!--hotel3-->\n\n<ion-card color="mail">\n\n  <img src="assets/imgs/hot4.jpeg"/>\n\n  <ion-card-content>\n\n    <ion-card-title text-right>\n\n      Hotel Vista Hermosa\n\n      </ion-card-title>\n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card color="mail">\n\n    <ion-card-content>\n\n      <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n      Hotel Vista Hermosa se encuentra en la zona centro de Altotonga, cuenta con cable de paga, internet y estacionamiento.<br>\n\n      <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n      <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>91320, Dr. Efrén E. Marín 89, Centro.<br>\n\n\n\n      <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 0514<br>\n\n\n\n      <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> 24 horas<br>\n\n\n\n      <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n  \n\n</ion-card-content>\n\n</ion-card>\n\n\n\n<!--hotel4-->\n\n\n\n<ion-slides pager="true" effect="coverflow">\n\n\n\n  <ion-slide style="background-color:   rgb(255, 230, 0)">\n\n    <h2>Hotel El Mirador</h2>\n\n    <img src="assets/imgs/mirador.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Cocina</h2>\n\n    <img src="assets/imgs/mirador1.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:   rgb(255, 230, 0)">\n\n    <h2>Recamara</h2>\n\n    <img src="assets/imgs/mirador2.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:   rgb(255, 230, 0)">\n\n    <h2>El Mirador</h2>\n\n    <img src="assets/imgs/mirador3.jpg"/>\n\n  </ion-slide>\n\n    \n\n</ion-slides>\n\n\n\n<ion-card color="mail">\n\n    <ion-card-content>\n\n      <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n      Hotel El Mirador se encuentra a orillas de Altotonga, a lado del rio, cuenta con cable de paga, internet, chimeneas, cocina y estacionamiento.<br>\n\n      <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n      <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>NAntigua S/N, Pancho Poza, 93700 Altotonga, Ver.<br>\n\n\n\n      <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 0359<br>\n\n\n\n      <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> 24 horas<br>\n\n\n\n      <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n  \n\n</ion-card-content>\n\n</ion-card>\n\n\n\n<!--hotel5-->\n\n\n\n<ion-slides pager="true" effect="coverflow">\n\n\n\n  <ion-slide style="background-color:   rgb(255, 230, 0)">\n\n    <h2>Hotel D\'One</h2>\n\n    <img src="assets/imgs/one.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Hotel D\'One</h2>\n\n    <img src="assets/imgs/one2.jpg"/>\n\n  </ion-slide>\n\n      \n\n</ion-slides>\n\n\n\n<ion-card color="mail">\n\n    <ion-card-content>\n\n      <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n      Hotel D\'One se encuentra en la zona sur de Altotonga, cuenta con cable de paga, piscina, internet y estacionamiento.<br>\n\n      <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n      <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Vicente Guerrero 13, Santiago Castillo, 93700 Santiago, Ver.<br>\n\n\n\n      <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 1689<br>\n\n\n\n      <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> 24 horas<br>\n\n\n\n      <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n  \n\n</ion-card-content>\n\n</ion-card>\n\n\n\n<!--hotel6-->\n\n\n\n<ion-slides pager="true" effect="coverflow">\n\n\n\n  <ion-slide style="background-color:   rgb(255, 230, 0)">\n\n    <h2>Hotel Floresta</h2>\n\n    <img src="assets/imgs/floresta.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Recamaras</h2>\n\n    <img src="assets/imgs/floresta1.jpg"/>\n\n  </ion-slide>\n\n      \n\n</ion-slides>\n\n\n\n<ion-card color="mail">\n\n    <ion-card-content>\n\n      <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n      Hotel Floresta se encuentra a orilla de Altotonga, en la zona norte, cuenta con cable de paga, internet y estacionamiento.<br>\n\n      <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n      <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>93700, Tulipanes 1, Santa Cruz, Altotonga, Ver.<br>\n\n\n\n      <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 1919<br>\n\n\n\n      <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> 24 horas<br>\n\n\n\n      <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n  \n\n</ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\hoteleria\hoteleria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HoteleriaPage);
    return HoteleriaPage;
}());

//# sourceMappingURL=hoteleria.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RestaurantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantesPage = /** @class */ (function () {
    function RestaurantesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RestaurantesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantesPage');
    };
    RestaurantesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurantes',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\restaurantes\restaurantes.html"*/'<!--\n\n  Generated template for the RestaurantesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Restaurantes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bd-color">\n\n\n\n  <!--restaurant1-->\n\n<ion-content padding class="bd-color">\n\n    <ion-card color="mail">\n\n      <img src="assets/imgs/res1.jpg"/>\n\n      <ion-card-content>\n\n        <ion-card-title text-right>\n\n          Restautante "Aurorita"\n\n          </ion-card-title>\n\n        \n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <ion-card color="mail">\n\n          <ion-card-content>\n\n            <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n            Aurorita se encuentra en la zona centro de Altotonga, cuenta con una gran variedad de platillos.<br>\n\n            <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n  \n\n            <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Dr. Marin #28 Col. Centro, Altotonga, Ver. <br>\n\n  \n\n            <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 2854<br>\n\n  \n\n            <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> 10:00am - 8:00pm<br>\n\n  \n\n            <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n        \n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <!--restaurant2-->\n\n\n\n  <ion-card color="mail">\n\n    <img src="assets/imgs/res3.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title text-right>\n\n        Garnacheria "La palma"\n\n        </ion-card-title>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card color="mail">\n\n        <ion-card-content>\n\n          <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n          Garnacheria la palma se encuentra en la colonia La palma.<br>\n\n          <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n          <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Jose María Arteaga, Centro, No.28, 93700 Altotonga, Ver.<br>\n\n\n\n          <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 00 000 000 00 00<br>\n\n\n\n          <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> Lunes - Domingos<br>\n\n\n\n          <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!--restaurant3-->\n\n\n\n  <ion-card color="mail">\n\n    <img src="assets/imgs/res6.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title text-right>\n\n        "El Jacal"\n\n        </ion-card-title>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card color="mail">\n\n        <ion-card-content>\n\n          <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n          El jacal se encuentra en la zona centro de Altotonga, a un lado del parque.<br>\n\n          <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n          <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Calle Interior Mercado Juárez 93700 Altotonga, Ver.<br>\n\n\n\n          <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 0514<br>\n\n\n\n          <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> Lunes - Domingos\n\n          7:00pm - 12:00pm<br>\n\n\n\n          <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n    <!--reataunrant5-->\n\n\n\n    <ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n      <ion-slide style="background-color: rgb(255, 230, 0)">\n\n        <h2>Restaurant "Candiles"</h2>\n\n        <img src="assets/imgs/candiles.jpg"/>\n\n      </ion-slide>\n\n    \n\n      <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n        <h2>Area Principal</h2>\n\n        <img src="assets/imgs/candiles1.jpg"/>\n\n      </ion-slide>\n\n        \n\n    </ion-slides>\n\n\n\n  <ion-card color="mail">\n\n      <ion-card-content>\n\n        <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n        Los candiles se encuentra en la zona centro de Altotonga.<br>\n\n        <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n        <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Calle Lic. Benito Juárez 16, La Loma, 93700 Altotonga, Ver.<br>\n\n\n\n        <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 0514<br>\n\n\n\n        <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> viernes 08:00–21:30<br>\n\n        sábado 08:00–21:30<br>\n\n        domingo 08:00–21:30<br>\n\n        lunes 08:00–21:30<br>\n\n        martes 08:00–21:30<br>\n\n        miércoles 08:00–21:30<br>\n\n        jueves 08:00–21:30<br>\n\n\n\n        <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n \n\n <!--reataunrant4-->\n\n\n\n <ion-slides pager="true" effect="coverflow"  >\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Restaurant "El rincon de Pancho Poza"</h2>\n\n    <img src="assets/imgs/rincon.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color: rgb(255, 230, 0)">\n\n    <h2>Area principal</h2>\n\n    <img src="assets/imgs/rincon2.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Platillos</h2>\n\n    <img src="assets/imgs/rincon3.jpg"/>\n\n  </ion-slide>\n\n    \n\n</ion-slides>\n\n\n\n<ion-card color="mail">\n\n  <ion-card-content>\n\n    <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n    El Rincon de pancho Poza se encuentra a orillas de Altotonga, cuenta con estacionamiento.<br>\n\n    <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n    <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Antigua, Las Bodas, 93700 Altotonga, Ver.<br>\n\n\n\n    <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 01 226 316 6952<br>\n\n\n\n    <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> viernes 07:00–19:00<br>\n\n    sábado 07:00–19:00<br>\n\n    domingo 07:00–19:00<br>\n\n    lunes 07:00–19:00<br>\n\n    martes 07:00–19:00<br>\n\n    miércoles 07:00–19:00<br>\n\n    jueves 07:00–19:00<br>\n\n\n\n    <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\restaurantes\restaurantes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RestaurantesPage);
    return RestaurantesPage;
}());

//# sourceMappingURL=restaurantes.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimnasiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GimnasiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GimnasiosPage = /** @class */ (function () {
    function GimnasiosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GimnasiosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GimnasiosPage');
    };
    GimnasiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gimnasios',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\gimnasios\gimnasios.html"*/'<!--\n\n  Generated template for the GimnasiosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Gimnasios</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar color="danger">\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar >\n\n    </ion-header>\n\n    <ion-content class="bd-color">\n\n      <ion-list class="bd-color">\n\n        <button class="bd-color" ion-item (click)="inicio()">\n\n          Inicio\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="sobre()">\n\n          ¿Quienes somos?\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="openPage(eventsPage)">\n\n          Bienvenido!\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="closeMenu()">\n\n          Close Menu\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  \n\n\n\n\n\n<ion-content padding class="bd-color">\n\n   <!--gim1-->\n\n<ion-content padding class="bd-color">\n\n  <ion-card color="mail">\n\n    <img src="assets/imgs/gim1.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title text-right>\n\n        Gimnasio "Sport Billy"\n\n        </ion-card-title>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card color="mail">\n\n        <ion-card-content>\n\n          <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n          Sport Billy se encuentra a unas cuadras del centro de Altotonga, cuenta con una gran variedad de aparatos musculares.<br>\n\n          <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n          <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Dr. Marin No.28, 93700 Altotonga, Ver. <br>\n\n\n\n          <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon> 00 000 000 00 00<br>\n\n\n\n          <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> viernes 07:00–19:00<br>\n\n          sábado 07:00–19:00<br>\n\n          domingo 07:00–19:00<br>\n\n          lunes 07:00–19:00<br>\n\n          martes 07:00–19:00<br>\n\n          miércoles 07:00–19:00<br>\n\n          jueves 07:00–19:00<br>\n\n          \n\n          6:00pm - 11:00pm<br>\n\n\n\n          <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!--gim2-->\n\n\n\n<ion-card color="mail">\n\n  <img src="assets/imgs/gim2.png"/>\n\n  <ion-card-content>\n\n    <ion-card-title text-right>\n\n     Gimnasio "Atenca Gym"\n\n      </ion-card-title>\n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card color="mail">\n\n      <ion-card-content>\n\n        <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n        Atenca Gym se enceuntra en la zona centro de Altotonga, cuenta con instructores y una gran variedad de equipo.<br>\n\n        <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n        <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>La palma, 93700 Altotonga, Ver.<br>\n\n\n\n        <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon>  01 226 316 6952\n\n        <br>\n\n\n\n        <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> viernes 07:00–19:00<br>\n\n        sábado 07:00–19:00<br>\n\n        domingo 07:00–19:00<br>\n\n        lunes 07:00–19:00<br>\n\n        martes 07:00–19:00<br>\n\n        miércoles 07:00–19:00<br>\n\n        jueves 07:00–19:00<br>\n\n\n\n        <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<!--gim3-->\n\n\n\n<ion-card color="mail">\n\n  <img src="assets/imgs/gim3.jpg"/>\n\n  <ion-card-content>\n\n    <ion-card-title text-right>\n\n      Gimnasio "Toros Salvajes"\n\n      </ion-card-title>\n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card color="mail">\n\n      <ion-card-content>\n\n        <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n        Toros Salvajes se enceuntra cerca del lugar conocido como las escalinatas, cuenta con instructores certificados, nutriologo, fisioterapeuta y una gran variedad de equipo.<br>\n\n        <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n        <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon> Rafael Vera de Cordoba, Centro, Altotonga, Ver. <br>\n\n\n\n        <ion-icon name="call" color="icon"><b>Teléfono:</b></ion-icon>01 226 553 5971<br>\n\n\n\n        <ion-icon name="clock" color="icon"><b>Horarios:</b></ion-icon> viernes 08:00–10:00, 17:00–21:00<br>\n\n        sábado 08:00–10:00<br>\n\n        domingo Cerrado<br>\n\n        lunes 08:00–10:00, 17:00–21:00<br>\n\n        martes 08:00–10:00, 17:00–21:00<br>\n\n        miércoles 08:00–10:00, 17:00–21:00<br>\n\n        jueves 08:00–10:00, 17:00–21:00<br>\n\n        7:00pm - 12:00pm<br>\n\n\n\n        <ion-icon name="chatboxes" color="icon"><b>Email:</b></ion-icon><br>\n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\gimnasios\gimnasios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GimnasiosPage);
    return GimnasiosPage;
}());

//# sourceMappingURL=gimnasios.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SitioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SitioPage = /** @class */ (function () {
    function SitioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SitioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SitioPage');
    };
    SitioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sitio',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\sitio\sitio.html"*/'<!--\n\n  Generated template for the SitioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>sitio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bd-color">\n\n  <ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n    <ion-slide style="background-color: rgb(255, 230, 0)">\n\n      <h2>"Centro recreativo y cultural"</h2>\n\n      <img src="assets/imgs/casa.jpg"/>\n\n    </ion-slide>\n\n  \n\n    <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n      <h2>Cancha de futbol</h2>\n\n      <img src="assets/imgs/casa1.jpg"/>\n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n      <h2>Gradas</h2>\n\n      <img src="assets/imgs/casa2.jpg"/>\n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n      <h2>Cancha de basquet </h2>\n\n      <img src="assets/imgs/casa3.jpg"/>\n\n    </ion-slide>\n\n      \n\n  </ion-slides>\n\n\n\n<ion-card color="mail">\n\n    <ion-card-content>\n\n      <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n      A orillas de Altotonga, frente al bachillerato EBA, dedicada al deporte y eventos culturales.<br>\n\n      <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n      <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Rafel Vera de Cordoba, El ranchito, 93700 Altotonga, Ver.<br>\n\n      \n\n</ion-card-content>\n\n</ion-card>\n\n\n\n<!--sitio2-->\n\n<ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n  <ion-slide style="background-color: rgb(255, 230, 0)">\n\n    <h2>"Estadio Pancho Poza"</h2>\n\n    <img src="assets/imgs/estadio2.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Gradas</h2>\n\n    <img src="assets/imgs/estadio1.jpg"/>\n\n  </ion-slide>\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Gradas</h2>\n\n    <img src="assets/imgs/estadio.jpg"/>\n\n  </ion-slide>\n\n     \n\n</ion-slides>\n\n\n\n<ion-card color="mail">\n\n  <ion-card-content>\n\n    <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n    A orillas de Altotonga, se encuentra en el barrio de Pancho Poza, a un lado de la telesecundaria Benito Juarez, dedicada al deporte.<br>\n\n    <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n    <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Av. Gral. Mariano Abasolo Sur., Pancho Poza, 93700 Altotonga, Ver.<br>\n\n    \n\n</ion-card-content>\n\n</ion-card>\n\n\n\n<!--sitio3-->\n\n<ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n  <ion-slide style="background-color: rgb(255, 230, 0)">\n\n    <h2>"Parque La Calichera"</h2>\n\n    <img src="assets/imgs/cali.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Comedores</h2>\n\n    <img src="assets/imgs/cali1.jpg"/>\n\n  </ion-slide>\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Rampas de patinaje</h2>\n\n    <img src="assets/imgs/cali2.jpg"/>\n\n  </ion-slide>\n\n     \n\n</ion-slides>\n\n\n\n<ion-card color="mail">\n\n  <ion-card-content>\n\n    <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n    Parque la calichera, se encuentra en el barrio La calichera, cuenta con comedores, rampas de patinaje, cancha de basquet y futbol.<br>\n\n    <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n    <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Heroes de Veracruz., La calichera, 93700 Altotonga, Ver.<br>\n\n    \n\n</ion-card-content>\n\n</ion-card>\n\n\n\n<!--sitio4-->\n\n<ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n  <ion-slide style="background-color: rgb(255, 230, 0)">\n\n    <h2>"Caopi"</h2>\n\n    <img src="assets/imgs/caopi1.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Club de baile Caopi</h2>\n\n    <img src="assets/imgs/caopi2.jpg"/>\n\n  </ion-slide>\n\n       \n\n</ion-slides>\n\n\n\n<ion-card color="mail">\n\n  <ion-card-content>\n\n    <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n    Centro psicologico CAOPI y club de baile, se encuentra en la zona centro de Altotonga y se dedica a la orientación psicologica infantil y al aprendizaje de baile.<br>\n\n    <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n    <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Av. Gral. Mariano Abasolo Sur, No. 43., 93700 Altotonga, Ver.<br>\n\n    \n\n</ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<!--sitio5-->\n\n<ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n  <ion-slide style="background-color: rgb(255, 230, 0)">\n\n    <h2>"Panteras Basquet ball"</h2>\n\n    <img src="assets/imgs/pan.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Panteras Basquet ball</h2>\n\n    <img src="assets/imgs/pan1.jpg"/>\n\n  </ion-slide>\n\n       \n\n</ion-slides>\n\n\n\n<ion-card color="mail">\n\n  <ion-card-content>\n\n    <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n    Club de basquet panteras, se encuentra en la zona centro de Altotonga y se dedica a motivar a los jovenes en el mundo del deporte.<br>\n\n    <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n    <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Av. Gral. Mariano Abasolo Sur, No. 60., 93700 Altotonga, Ver.<br>\n\n    \n\n</ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<!--sitio4-->\n\n<ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n  <ion-slide style="background-color: rgb(255, 230, 0)">\n\n    <h2>"Studio Lucio Arcos"</h2>\n\n    <img src="assets/imgs/zumba1.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n    <h2>Studio Lucio Arcos</h2>\n\n    <img src="assets/imgs/zumba.jpg"/>\n\n  </ion-slide>\n\n       \n\n</ion-slides>\n\n\n\n<ion-card color="mail">\n\n  <ion-card-content>\n\n    <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n    Studio de zumba Lucio Arcos, se encuentra en la zona centro de Altotonga y se dedica a promover y motivar la actividad fisica mediante el baile.<br>\n\n    <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n\n\n    <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Gral. Ignacio Allende, No. 30., 93700 Altotonga, Ver.<br>\n\n    \n\n</ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\sitio\sitio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SitioPage);
    return SitioPage;
}());

//# sourceMappingURL=sitio.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiendasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TiendasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TiendasPage = /** @class */ (function () {
    function TiendasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TiendasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TiendasPage');
    };
    TiendasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tiendas',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\tiendas\tiendas.html"*/'<!--\n\n  Generated template for the TiendasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Tiendas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bd-color">\n\n\n\n    <ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n        <ion-slide style="background-color: rgb(255, 230, 0)">\n\n          <h2>Grupo comercial Sequera</h2>\n\n          <img src="assets/imgs/sequera.jpg"/>\n\n        </ion-slide>\n\n      \n\n        <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n          <h2>Grupo comercial Sequera</h2>\n\n          <img src="assets/imgs/sequera1.jpg"/>\n\n        </ion-slide>\n\n             \n\n      </ion-slides>\n\n      \n\n      <ion-card color="mail">\n\n        <ion-card-content>\n\n          <ion-icon name="alert" color="icon"><b>Información</b></ion-icon><br>\n\n          Grupo comercial Sequera, se dedica a la venta de abarrotes, especias, semillas, articulos para el hogar y articulos personales. Cuenta con 3 sucursales.<br>\n\n          <ion-icon name="compass" color="icon"><b> Ubicación:</b></ion-icon><br> Altotonga<br>\n\n      \n\n          <ion-icon name="pricetag" color="icon"><b>Dirección:</b> </ion-icon>Barrio La Palma, Colonia centro, Barrio Pancho Poza, 93700 Altotonga, Ver.<br>\n\n          \n\n      </ion-card-content>\n\n      </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\tiendas\tiendas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TiendasPage);
    return TiendasPage;
}());

//# sourceMappingURL=tiendas.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurismoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TurismoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurismoPage = /** @class */ (function () {
    function TurismoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TurismoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TurismoPage');
    };
    TurismoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-turismo',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\turismo\turismo.html"*/'<!--\n\n  Generated template for the TurismoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Turismo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bd-color">\n\n  \n\n\n\n  <ion-card color="tabs">\n\n    <ion-card-content>\n\n            <h1 text-center><b>Áreas Verdes</b></h1>\n\n  </ion-card-content>\n\n  </ion-card>\n\n<!--rio-->\n\n    <ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n        <ion-slide>\n\n          <h2>Río Pancho Poza</h2>\n\n          <img src="assets/imgs/rio15.jpg"/>\n\n        </ion-slide>\n\n      \n\n        <ion-slide>\n\n          <h2>Cascada</h2>\n\n          <img src="assets/imgs/rio13.jpeg"/>\n\n        </ion-slide>\n\n        \n\n        <ion-slide>\n\n          <h2>Río</h2>\n\n          <img src="assets/imgs/rio4.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Río</h2>\n\n          <img src="assets/imgs/rio5.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Río</h2>\n\n          <img src="assets/imgs/rio6.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Río</h2>\n\n          <img src="assets/imgs/rio7.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Río</h2>\n\n          <img src="assets/imgs/rio9.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Río</h2>\n\n          <img src="assets/imgs/rio12.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Pozas</h2>\n\n          <img src="assets/imgs/rio14.jpg"/>\n\n        </ion-slide>\n\n      </ion-slides>\n\n\n\n      <!--bosque-->\n\n\n\n      <ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n        <ion-slide>\n\n          <h2>Bosque Zoatzingo</h2>\n\n          <img src="assets/imgs/bosque1.jpeg"/>\n\n        </ion-slide>\n\n      \n\n        <ion-slide>\n\n          <h2>Veredas</h2>\n\n          <img src="assets/imgs/bosque2.jpeg"/>\n\n        </ion-slide>\n\n        \n\n        <ion-slide>\n\n          <h2>Árboles</h2>\n\n          <img src="assets/imgs/bosque3.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Naturaleza</h2>\n\n          <img src="assets/imgs/bosque4.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Árbol</h2>\n\n          <img src="assets/imgs/bosque6.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Camino</h2>\n\n          <img src="assets/imgs/bosque7.jpeg"/>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <h2>Bosque</h2>\n\n          <img src="assets/imgs/bosque8.jpeg"/>\n\n        </ion-slide>\n\n        </ion-slides>\n\n\n\n        <!--Urban-->\n\n        <ion-card color="tabs">\n\n          <ion-card-content>\n\n                  <h1 text-center><b>Espacios urbanos</b></h1>\n\n        </ion-card-content>\n\n        </ion-card>  \n\n      \n\n\n\n\n\n<ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n  <ion-slide>\n\n    <h2>Cuicuila</h2>\n\n    <img src="assets/imgs/centro11.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <h2>Fuente</h2>\n\n    <img src="assets/imgs/centro13.jpg"/>\n\n  </ion-slide>\n\n  \n\n  <ion-slide>\n\n    <h2>Kiosco</h2>\n\n    <img src="assets/imgs/centro15.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <h2>Iglesia Santa María Magdalena</h2>\n\n    <img src="assets/imgs/centro17.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <h2>Escalinatas</h2>\n\n    <img src="assets/imgs/esca1.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <h2>Escalinatas</h2>\n\n    <img src="assets/imgs/esca3.jpg"/>\n\n  </ion-slide>\n\n  </ion-slides>\n\n\n\n     </ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\turismo\turismo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TurismoPage);
    return TurismoPage;
}());

//# sourceMappingURL=turismo.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastronomiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GastronomiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GastronomiaPage = /** @class */ (function () {
    function GastronomiaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GastronomiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GastronomiaPage');
    };
    GastronomiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gastronomia',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\gastronomia\gastronomia.html"*/'<!--\n\n  Generated template for the GastronomiaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Gastronomia</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n  <ion-content padding class="bd-color">   <!--bg-image-->\n\n\n\n   \n\n  <ion-grid >\n\n    <ion-row>\n\n      <ion-col>\n\n          <ion-card >\n\n              <ion-card-content>\n\n                  <img src="assets/imgs/garnacha.jpg"/>\n\n                  <hr>\n\n                  <p text-center>\n\n                    <b>\n\n                      <a>Garnachas</a>\n\n                      \n\n                    </b>\n\n                    \n\n                  </p>\n\n              </ion-card-content>\n\n            </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n          <ion-card>\n\n              <ion-card-content>\n\n                  <img src="assets/imgs/tamales.jpg"/>\n\n                  <hr>\n\n                  <p text-center>\n\n                    <b>\n\n                      <a>Tamales</a>\n\n                      \n\n                    </b>\n\n                  </p>\n\n              </ion-card-content>\n\n            </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    <img src="assets/imgs/taco.jpg"/>\n\n                    <hr>\n\n                    <p text-center>\n\n                      <b>\n\n                        <a>Tacos al pastor</a>\n\n                        \n\n                      </b>\n\n                    </p>\n\n                </ion-card-content>\n\n              </ion-card>\n\n        </ion-col> \n\n      <ion-col>\n\n          <ion-card>\n\n              <ion-card-content>\n\n                  <img src="assets/imgs/calabaza.png"/>\n\n                  <hr>\n\n                  <p text-center>\n\n                    <b>\n\n                      <a>Dulce de calabaza</a>\n\n                      \n\n                    </b>\n\n                  </p>\n\n              </ion-card-content>\n\n            </ion-card>\n\n      </ion-col>\n\n\n\n      \n\n    </ion-row>\n\n    \n\n  </ion-grid> \n\n  \n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <img src="assets/imgs/atole.jpg"/>\n\n                <hr>\n\n                <p text-center>\n\n                  <b>\n\n                    <a>Atole de arroz</a>\n\n                   \n\n                  </b>\n\n                </p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n    </ion-col>\n\n         \n\n    <ion-col>\n\n      <ion-card>\n\n          <ion-card-content>\n\n              <img src="assets/imgs/picadas.jpg"/>\n\n              <hr>\n\n              <p text-center>\n\n                <b>\n\n                  <a>Picadas</a>\n\n                  \n\n                </b>\n\n              </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n  </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\gastronomia\gastronomia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GastronomiaPage);
    return GastronomiaPage;
}());

//# sourceMappingURL=gastronomia.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriaPage = /** @class */ (function () {
    function HistoriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriaPage');
    };
    HistoriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historia',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\historia\historia.html"*/'<!--\n\n  Generated template for the HistoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Historia</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar color="danger">\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar >\n\n    </ion-header>\n\n    <ion-content class="bd-color">\n\n      <ion-list class="bd-color">\n\n        <button class="bd-color" ion-item (click)="inicio()">\n\n          Inicio\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="sobre()">\n\n          ¿Quienes somos?\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="openPage(eventsPage)">\n\n          Bienvenido!\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="closeMenu()">\n\n          Close Menu\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  \n\n\n\n<ion-content padding class="bd-color">\n\n\n\n    <ion-card color="primary">\n\n        <ion-card-content>\n\n                <h1 text-center><b>Altotonga en la historia</b></h1>\n\n      </ion-card-content>\n\n      </ion-card>\n\n  <ion-slides pager="true" effect="coverflow"  >\n\n\n\n     \n\n    <ion-slide>\n\n      <h2>La loma</h2>\n\n      <img src="assets/imgs/antigua1.jpg"/>\n\n    </ion-slide>\n\n  \n\n    <ion-slide>\n\n      <h2>La loma</h2>\n\n      <img src="assets/imgs/antigua2.jpg"/>\n\n    </ion-slide>\n\n    \n\n    <ion-slide>\n\n      <h2>Parque</h2>\n\n      <img src="assets/imgs/antigua4.jpg"/>\n\n    </ion-slide>\n\n  \n\n    <ion-slide>\n\n      <h2>Parque</h2>\n\n      <img src="assets/imgs/antigua5.jpg"/>\n\n    </ion-slide>\n\n  \n\n    <ion-slide>\n\n      <h2>Parque</h2>\n\n      <img src="assets/imgs/antigua6.jpg"/>\n\n    </ion-slide>\n\n  \n\n    <ion-slide>\n\n      <h2>Palacio Municipal</h2>\n\n      <img src="assets/imgs/antigua7.jpg"/>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <h2>Escalinatas</h2>\n\n      <img src="assets/imgs/antigua8.jpg"/>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <h2>La loma</h2>\n\n      <img src="assets/imgs/antigua9.jpg"/>\n\n    </ion-slide>\n\n    </ion-slides>\n\n\n\n    <ion-card color="mail">\n\n      <ion-card-header text-center >\n\n        <b>Altotonga, Veracruz.</b>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n       <b>TOPONIMIA</b> <br>\n\n        Voz náhuatl Atl totonqui; Atl, agua; Totonqui, cosa caliente; Ca, en; "en aguas calientes o termales".<br>\n\n        \n\n       <b>HISTORIA</b> <br>\n\n        Fue una ciudad prehispánica, que estuvo situada en la congregación de Santa Cruz, hoy Francisco Javier Gómez, en honor al republicano y patriota nacido en esta población.\n\n        \n\n        Anterior a la conquista, Altotónga perteneció a la cultura totonaca.\n\n      </ion-card-content>\n\n    </ion-card>\n\n        \n\n    <ion-card color="mail">\n\n      <img src="assets/imgs/eescudo.jpg"/>\n\n      <ion-card-content>\n\n        <ion-card-title text-right>\n\n        <h1><b>Escudo</b></h1> \n\n          </ion-card-title>\n\n        \n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card color="mail">\n\n      <ion-card-header text-center >\n\n       <h1> <b>Escudo</b></h1>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        Tiene al centro, en la parte alta, cuatro cimas en color azul intenso, confundidas con el tono del cielo al atardecer; en línea descendiente podemos apreciar la curva del horizonte, que representa una tonalidad más pálida de la gama del color azul, e inmediatamente debajo se representa una olla de barro, lo cual simula agua hirviendo y se observa el vapor, el topónimo que está anotado después de las figuras circulares de color rojo y amarillo confirman lo antes señalado atl agua, totonqui caliente.\n\n\n\n        Enmarcando la imagen descrita podemos leer el nombre castellanizado del municipio, y en la parte inferior, dispuestos hacia uno y otro lado se observan dos mazorcas semienvueltas en la hoja de totomoxtle tierna, simbolizando el producto principal de la región.\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card color="mail">\n\n      <ion-card-header text-center >\n\n       <h1> <b>Reseña Prehistorica</b></h1>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        Fue una Ciudad prehispánica, que estuvo situada en la congregación de Santa Cruz, hoy Francisco Javier Gómez, en honor al republicano y patriota nacido en esta población.\n\n\n\nAnterior a la conquista, Altotónga perteneció a la cultura totonaca.\n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <ion-card color="mail">\n\n      <ion-card-header text-center >\n\n       <h1> <b>Fiestas</b></h1>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        Del 1 al 5 de mayo se lleva a cabo la feria regional.\n\nEl 22 de julio se celebra en honor de Santa María Magdalena, patrona del lugar, la feria regional con eventos culturales y deportivos, jaripeos, carreras de caballos y peleas de gallos. \n\nElección de la reina con un baile de coronación y bailes populares, sin faltar los puestos de vendimias y los juegos mecánicos en el parque principal del poblado.\n\nAsí como fechas de calendario cívico y los días de Todos los Santos y los Fieles Difuntos.\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card color="mail">\n\n      <ion-card-header text-center >\n\n       <h1> <b>Musica</b></h1>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        En el municipio se escucha de toda la música y en las fiestas patronales, civicas y familiares se acostumbra la música de banda.\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card color="mail">\n\n      <ion-card-header text-center >\n\n       <h1> <b>Recursos Naturales</b></h1>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        Su riqueza esta representada por minerales como toba básica; entre su vegetación sobresalen el pino y el encino por lo apreciado de su madera.\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\historia\historia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoriaPage);
    return HistoriaPage;
}());

//# sourceMappingURL=historia.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GastronomiaPageModule", function() { return GastronomiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gastronomia__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GastronomiaPageModule = /** @class */ (function () {
    function GastronomiaPageModule() {
    }
    GastronomiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gastronomia__["a" /* GastronomiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gastronomia__["a" /* GastronomiaPage */]),
            ],
        })
    ], GastronomiaPageModule);
    return GastronomiaPageModule;
}());

//# sourceMappingURL=gastronomia.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GimnasiosPageModule", function() { return GimnasiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gimnasios__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GimnasiosPageModule = /** @class */ (function () {
    function GimnasiosPageModule() {
    }
    GimnasiosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gimnasios__["a" /* GimnasiosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gimnasios__["a" /* GimnasiosPage */]),
            ],
        })
    ], GimnasiosPageModule);
    return GimnasiosPageModule;
}());

//# sourceMappingURL=gimnasios.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaPageModule", function() { return HistoriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historia__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoriaPageModule = /** @class */ (function () {
    function HistoriaPageModule() {
    }
    HistoriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historia__["a" /* HistoriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historia__["a" /* HistoriaPage */]),
            ],
        })
    ], HistoriaPageModule);
    return HistoriaPageModule;
}());

//# sourceMappingURL=historia.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoteleriaPageModule", function() { return HoteleriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoteleria__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HoteleriaPageModule = /** @class */ (function () {
    function HoteleriaPageModule() {
    }
    HoteleriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hoteleria__["a" /* HoteleriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hoteleria__["a" /* HoteleriaPage */]),
            ],
        })
    ], HoteleriaPageModule);
    return HoteleriaPageModule;
}());

//# sourceMappingURL=hoteleria.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicidadPageModule", function() { return PublicidadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicidad__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PublicidadPageModule = /** @class */ (function () {
    function PublicidadPageModule() {
    }
    PublicidadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__publicidad__["a" /* PublicidadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__publicidad__["a" /* PublicidadPage */]),
            ],
        })
    ], PublicidadPageModule);
    return PublicidadPageModule;
}());

//# sourceMappingURL=publicidad.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitioPageModule", function() { return SitioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sitio__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SitioPageModule = /** @class */ (function () {
    function SitioPageModule() {
    }
    SitioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sitio__["a" /* SitioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sitio__["a" /* SitioPage */]),
            ],
        })
    ], SitioPageModule);
    return SitioPageModule;
}());

//# sourceMappingURL=sitio.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiendasPageModule", function() { return TiendasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tiendas__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TiendasPageModule = /** @class */ (function () {
    function TiendasPageModule() {
    }
    TiendasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tiendas__["a" /* TiendasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tiendas__["a" /* TiendasPage */]),
            ],
        })
    ], TiendasPageModule);
    return TiendasPageModule;
}());

//# sourceMappingURL=tiendas.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurismoPageModule", function() { return TurismoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turismo__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TurismoPageModule = /** @class */ (function () {
    function TurismoPageModule() {
    }
    TurismoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__turismo__["a" /* TurismoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__turismo__["a" /* TurismoPage */]),
            ],
        })
    ], TurismoPageModule);
    return TurismoPageModule;
}());

//# sourceMappingURL=turismo.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantesPageModule", function() { return RestaurantesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurantes__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RestaurantesPageModule = /** @class */ (function () {
    function RestaurantesPageModule() {
    }
    RestaurantesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__restaurantes__["a" /* RestaurantesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restaurantes__["a" /* RestaurantesPage */]),
            ],
        })
    ], RestaurantesPageModule);
    return RestaurantesPageModule;
}());

//# sourceMappingURL=restaurantes.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\contact\contact.html"*/'<ion-header>\n\n    <ion-navbar color="danger">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title text-center>Top Software</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar color="danger">\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar >\n\n    </ion-header>\n\n    <ion-content class="bd-color">\n\n      <ion-list class="bd-color">\n\n        <button class="bd-color" ion-item (click)="inicio()">\n\n          Inicio\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="sobre()">\n\n          ¿Quienes somos?\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="openPage(eventsPage)">\n\n          Bienvenido!\n\n        </button>\n\n        <button class="bd-color" ion-item (click)="closeMenu()">\n\n          Close Menu\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n\n\n<ion-content class="bd-color">\n\n<div><ion-card >\n\n    <h2 text-center><b>Empresa</b></h2>\n\n  <ion-card>\n\n    <img src="assets/imgs/top1.png">\n\n  </ion-card>\n\n</ion-card></div>  \n\n  <br>\n\n  \n\n    <ion-card>\n\n      <ion-list>\n\n        <ion-card-header text-uppercase text-center color="primary">\n\n          <h2><b>Desarrollador</b></h2>\n\n        </ion-card-header>\n\n        <ion-item>\n\n          \n\n            <img src="assets/imgs/bosque.png" class="size12">\n\n          \n\n          <br>\n\n          <h1><b>Jesús García Ventura</b></h1>\n\n          <br>\n\n        </ion-item>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <div>\n\n                <a href="tel:2265532854" ion-button large color="call">\n\n                  <ion-icon name="md-call"></ion-icon>\n\n                </a>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <div>\n\n                <a href="https://www.facebook.com/jesus.garciaven" ion-button large color="facebook">\n\n                  <ion-icon name="logo-facebook"></ion-icon>\n\n                </a>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <div>\n\n                <a href="peluche24cr7@hotmail.com" ion-button  large color="mail">\n\n                  <ion-icon name="md-mail"></ion-icon>\n\n                </a>\n\n              </div>\n\n            </ion-col>\n\n           \n\n          </ion-row>\n\n        </ion-grid>\n\n        <br>\n\n      </ion-list>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-list>\n\n        <ion-card-header text-uppercase text-center color="primary">\n\n          <h2><b>Diseñadores</b></h2>\n\n        </ion-card-header>\n\n        <ion-item>\n\n          \n\n            <img src="assets/imgs/bosque.png" class="size12">\n\n          \n\n          <br>\n\n          <h1><b>Sergio Hernández Gonzalez</b></h1>\n\n          <br>\n\n        </ion-item>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <div>\n\n                <a href="tel:2321403892" ion-button large color="call">\n\n                  <ion-icon name="md-call"></ion-icon>\n\n                </a>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <div>\n\n                <a href="https://www.facebook.com/profile.php?id=100004375902898" ion-button large color="facebook">\n\n                  <ion-icon name="logo-facebook"></ion-icon>\n\n                </a>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <div>\n\n                <a href="mailto:132040989@utgz.edu.mx" ion-button large color="mail">\n\n                  <ion-icon name="md-mail"></ion-icon>\n\n                </a>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-list>\n\n        \n\n        <ion-item>\n\n          \n\n            <img src="assets/imgs/bosque.png" class="size12">\n\n         \n\n          <br>\n\n          <h1><b>Juan Pablo Abad Arcos</b></h1>\n\n          <br>\n\n        </ion-item>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <div>\n\n                <a href="tel:2311522061" ion-button large color="call">\n\n                  <ion-icon name="md-call"></ion-icon>\n\n                </a>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <div>\n\n                <a href="https://www.facebook.com/juanpablo.abadarcos" ion-button large color="facebook">\n\n                  <ion-icon name="logo-facebook"></ion-icon>\n\n                </a>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <div>\n\n                <a href="mailto:132011223@utgz.edu.mx" ion-button large color="mail">\n\n                  <ion-icon name="md-mail"></ion-icon>\n\n                </a>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BienvenidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BienvenidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BienvenidosPage = /** @class */ (function () {
    function BienvenidosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BienvenidosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BienvenidosPage');
    };
    BienvenidosPage.prototype.inicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    BienvenidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bienvenidos',template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\bienvenidos\bienvenidos.html"*/'<!--\n\n  Generated template for the BienvenidosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-slides pager="true" effect="loop" class="slider">\n\n      \n\n\n\n        <ion-slide style="background-color:  rgb(255, 0, 0)"  >\n\n            <img src="assets/imgs/viveinicio.png" padding="top" class="imagenslide"/>   \n\n          <br>\n\n          <br>\n\n          \n\n        </ion-slide>\n\n      \n\n        <ion-slide style="background-color: rgb(0, 153, 255)">\n\n            <img src="assets/imgs/conoce.png" padding="top" class="imagenslide"/>\n\n        </ion-slide>\n\n      \n\n        <ion-slide style="background-color:  rgb(255, 230, 0)">\n\n          <img src="assets/imgs/post.png" padding="top" class="imagenslide"/>\n\n        </ion-slide>\n\n      \n\n        <ion-slide style="background-color: rgb(131, 243, 97)">\n\n          <img src="assets/imgs/publi.png" padding="top" class="imagenslide"/>\n\n          </ion-slide>\n\n\n\n          <ion-slide style="background-color:  rgb(232, 80, 252)">\n\n            <img src="assets/imgs/vivecon.png" padding="top" class="imagenslide"/>\n\n            <button ion-button round large icon-right color="hot" (click)="inicio()">Continuar  <ion-icon name="arrow-dropright"></ion-icon></button> \n\n            </ion-slide>\n\n            \n\n      </ion-slides>\n\n      \n\n    </ion-content>'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\bienvenidos\bienvenidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BienvenidosPage);
    return BienvenidosPage;
}());

//# sourceMappingURL=bienvenidos.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(499);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mi_altotonga_mi_altotonga__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_publicidad_publicidad_module__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_turismo_turismo_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_gastronomia_gastronomia_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_historia_historia_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_altotonga_altotonga_module__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hoteleria_hoteleria_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_restaurantes_restaurantes_module__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_gimnasios_gimnasios_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_sitio_sitio_module__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_antros_antros_module__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tiendas_tiendas_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_bienvenidos_bienvenidos__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_imagen_firebase_imagen_firebase__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_camara_camara__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_imagenes_firebase_imagenes_firebase__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_image_picker__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_fire__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_fire_database__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_fire_auth__ = __webpack_require__(613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var firebaseConfig = {
    apiKey: "AIzaSyA818ZDqOYcTDseyrnZxKCn1qQxbyRHG0k",
    authDomain: "altotonga-6be61.firebaseapp.com",
    databaseURL: "https://altotonga-6be61.firebaseio.com",
    projectId: "altotonga-6be61",
    storageBucket: "altotonga-6be61.appspot.com",
    messagingSenderId: "588659933911"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mi_altotonga_mi_altotonga__["a" /* MiAltotongaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bienvenidos_bienvenidos__["a" /* BienvenidosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_imagenes_firebase_imagenes_firebase__["a" /* ImagenesFirebasePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/altotonga/altotonga.module#AltotongaPageModule', name: 'AltotongaPage', segment: 'altotonga', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/antros/antros.module#AntrosPageModule', name: 'AntrosPage', segment: 'antros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bienvenidos/bienvenidos.module#BienvenidosPageModule', name: 'BienvenidosPage', segment: 'bienvenidos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gastronomia/gastronomia.module#GastronomiaPageModule', name: 'GastronomiaPage', segment: 'gastronomia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gimnasios/gimnasios.module#GimnasiosPageModule', name: 'GimnasiosPage', segment: 'gimnasios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historia/historia.module#HistoriaPageModule', name: 'HistoriaPage', segment: 'historia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/imagen-formulario/imagen-formulario.module#ImagenFormularioPageModule', name: 'ImagenFormularioPage', segment: 'imagen-formulario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mi-altotonga/mi-altotonga.module#MiAltotongaPageModule', name: 'MiAltotongaPage', segment: 'mi-altotonga', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hoteleria/hoteleria.module#HoteleriaPageModule', name: 'HoteleriaPage', segment: 'hoteleria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/imagenes-firebase/imagenes-firebase.module#ImagenesFirebasePageModule', name: 'ImagenesFirebasePage', segment: 'imagenes-firebase', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publicidad/publicidad.module#PublicidadPageModule', name: 'PublicidadPage', segment: 'publicidad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sitio/sitio.module#SitioPageModule', name: 'SitioPage', segment: 'sitio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tiendas/tiendas.module#TiendasPageModule', name: 'TiendasPage', segment: 'tiendas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turismo/turismo.module#TurismoPageModule', name: 'TurismoPage', segment: 'turismo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurantes/restaurantes.module#RestaurantesPageModule', name: 'RestaurantesPage', segment: 'restaurantes', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__pages_publicidad_publicidad_module__["PublicidadPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_turismo_turismo_module__["TurismoPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_gastronomia_gastronomia_module__["GastronomiaPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_historia_historia_module__["HistoriaPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_altotonga_altotonga_module__["AltotongaPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_hoteleria_hoteleria_module__["HoteleriaPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_restaurantes_restaurantes_module__["RestaurantesPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_gimnasios_gimnasios_module__["GimnasiosPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_sitio_sitio_module__["SitioPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_antros_antros_module__["AntrosPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_tiendas_tiendas_module__["TiendasPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_29__angular_fire_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_30__angular_fire_auth__["a" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mi_altotonga_mi_altotonga__["a" /* MiAltotongaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bienvenidos_bienvenidos__["a" /* BienvenidosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_imagenes_firebase_imagenes_firebase__["a" /* ImagenesFirebasePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_imagen_firebase_imagen_firebase__["a" /* ImagenFirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_camara_camara__["a" /* CamaraProvider */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_image_picker__["a" /* ImagePicker */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_imagenes_firebase_imagenes_firebase__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_imagenes_firebase_imagenes_firebase__["a" /* ImagenesFirebasePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mi_altotonga_mi_altotonga__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imagenes_firebase_imagenes_firebase__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__mi_altotonga_mi_altotonga__["a" /* MiAltotongaPage */];
        this.imagen = __WEBPACK_IMPORTED_MODULE_5__imagenes_firebase_imagenes_firebase__["a" /* ImagenesFirebasePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\tabs\tabs.html"*/'<ion-tabs color="danger">\n\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Sobre nosotros" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Top Software" tabIcon="people"></ion-tab>\n\n <ion-tab [root]="tab4Root" tabTitle="Mi Altotonga" tabIcon="image"></ion-tab>\n\n <ion-tab [root]="imagen" tabTitle="Imagen" tabIcon="image"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Serch\Desktop\Altotonga\vivealtotonga\myApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.js.map