import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public alertCtrl: AlertController) {

  }
  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Emergency Number',
      message: 'Dont worry if you cant locate an outage nearby. We still have an emergency number on <strong>105</strong>.<br /><br />Would you like to call us now?',
      buttons: [
        {
          text: 'No thanks',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Call us now',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
