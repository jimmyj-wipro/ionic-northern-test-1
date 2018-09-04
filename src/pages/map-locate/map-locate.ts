import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

declare var google;

@Component({
  selector: 'page-map-locate',
  templateUrl: 'map-locate.html'
})
export class MapLocatePage {

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
      zoom: 12,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let triangleCoords = [
      {lat: 51.5352, lng: -0.1319},
      {lat: 51.5112, lng: -0.0507},
      {lat: 51.4886, lng: -0.1207}
    ];
    let flightPath = new google.maps.Polygon({
      path: triangleCoords,
      strokeColor: '#C81F45',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      fillColor: '#C81F45',
      fillOpacity: 0.35
    });

    flightPath.setMap(this.map);

  }, (err) => {
    console.log(err);
  });




}
  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}
