import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GimnasiosPage } from './gimnasios';

@NgModule({
  declarations: [
    GimnasiosPage,
  ],
  imports: [
    IonicPageModule.forChild(GimnasiosPage),
  ],
})
export class GimnasiosPageModule {}
