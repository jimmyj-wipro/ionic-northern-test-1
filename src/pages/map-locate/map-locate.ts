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

    let triangleCoords2 = [
      {lat: 51.5328, lng: -0.0670},
      {lat: 51.541942, lng: -0.090746},
      {lat: 51.547553, lng: -0.048875}
    ];
    let flightPath2 = new google.maps.Polygon({
      path: triangleCoords2,
      strokeColor: '#A2D729',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      fillColor: '#A2D729',
      fillOpacity: 0.35
    });

    flightPath.setMap(this.map);
    flightPath2.setMap(this.map);


    new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(51.5122, -0.0987),
      animation: google.maps.Animation.DROP,
      icon: {
        anchor: new google.maps.Point(18, 56),
        scaledSize: new google.maps.Size(36, 56),
        url: '../assets/imgs/icon-unplanned-powercut.svg'
      }
    })

    new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(51.538342, -0.0688746),
      animation: google.maps.Animation.DROP,
      icon: {
        anchor: new google.maps.Point(18, 56),
        scaledSize: new google.maps.Size(36, 56),
        url: '../assets/imgs/icon-power-restored.svg'
      }
    })

  }, (err) => {
    console.log(err);
  });




}
  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}
