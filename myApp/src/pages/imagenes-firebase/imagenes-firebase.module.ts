import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagenesFirebasePage } from './imagenes-firebase';

@NgModule({
  declarations: [
    ImagenesFirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(ImagenesFirebasePage),
  ],
})
export class ImagenesFirebasePageModule {}
