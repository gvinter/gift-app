import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ContactPicker, EventItem } from '../pages';

@Component({
  selector: 'page-gift-list',
  templateUrl: 'gift-list.html'
})
export class GiftList {

  items: Array<{
    recipientName: string,
    eventName: string,
    dueDate: string
  }>;

  constructor(private navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        recipientName: 'Jenna H.',
        eventName: 'Birthday',
        dueDate: "Apr " + i
      });
    }

  }

  goToContactPicker(flowType) {
    this.navCtrl.push(ContactPicker, {
      flow: flowType
    });
  }

  itemTapped(event, eventItem) {
    // That's right, we're pushing to ourselves!
    console.log(event);
    console.log(eventItem);
    this.navCtrl.push(EventItem, {
      eventItem: eventItem
    });
  }
}
