import { NgModule } from '@angular/core';
import { HomePage} from './home';
import { ModalPage} from '../modal/modal';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [HomePage, ModalPage],
  imports: [IonicPageModule.forChild(HomePage)],
  entryComponents: [HomePage, ModalPage]
})
export class HomePageModule { }

