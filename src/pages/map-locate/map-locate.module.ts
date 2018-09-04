import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapLocatePage } from './map-locate';
import { ModalPage} from '../modal/modal';

@NgModule({
  declarations: [MapLocatePage, ModalPage],
  imports: [IonicPageModule.forChild(MapLocatePage)],
  entryComponents: [MapLocatePage, ModalPage]
})
export class MapLocatePageModule {}
