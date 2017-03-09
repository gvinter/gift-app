import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EventItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-item',
  templateUrl: 'event-item.html'
})
export class EventItem {
  eventItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventItem = navParams.get('eventItem');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventItemPage');
  }

}
