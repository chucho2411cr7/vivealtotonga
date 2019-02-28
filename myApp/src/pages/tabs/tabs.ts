import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {MiAltotongaPage} from '../mi-altotonga/mi-altotonga'
import { ImagenesFirebasePage } from '../imagenes-firebase/imagenes-firebase';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MiAltotongaPage;
  imagen = ImagenesFirebasePage;

  constructor() {

  }
}
