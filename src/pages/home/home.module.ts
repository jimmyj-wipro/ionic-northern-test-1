import { NgModule } from '@angular/core';
import { HomePage} from './home';
import { ModalPage} from '../modal/modal';
import { MapLocatePage } from '../map-locate/map-locate';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [HomePage, ModalPage, MapLocatePage],
  imports: [IonicPageModule.forChild(HomePage)],
  entryComponents: [HomePage, ModalPage, MapLocatePage]
})
export class HomePageModule { }

