import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-event-item',
  templateUrl: 'event-item.html'
})
export class EventItem {
  event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventItemPage');
  }

}
