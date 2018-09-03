import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }


  loadMap(){

  this.geolocation.getCurrentPosition().then((position) => {

    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 8,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }, (err) => {
    console.log(err);
  });

}
  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}
