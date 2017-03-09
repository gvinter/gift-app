import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ContactPicker, EventItem } from '../pages';
import { GiftAppApi } from '../../shared/shared';

@Component({
  selector: 'page-gift-list',
  templateUrl: 'gift-list.html'
})

export class GiftList {

  events: any;

  constructor(
    private navCtrl: NavController,
    public navParams: NavParams,
    private giftAppApi: GiftAppApi
  ) {}

  goToContactPicker(flowType) {
    this.navCtrl.push(ContactPicker, {
      flow: flowType
    });
  }

  itemTapped($event, event) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(EventItem, {
      event: event
    });
  }

  ionViewDidLoad() {
    this.giftAppApi.getEvents().then(data => {
      this.events = data;
      console.log(this.events);
    });
  }
}
