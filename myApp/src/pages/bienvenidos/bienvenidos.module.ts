import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BienvenidosPage } from './bienvenidos';

@NgModule({
  declarations: [
    BienvenidosPage,
  ],
  imports: [
    IonicPageModule.forChild(BienvenidosPage),
  ],
})
export class BienvenidosPageModule {}
