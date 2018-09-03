import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}
