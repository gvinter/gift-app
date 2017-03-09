import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ContactItem } from '../pages';
import { GiftAppApi } from '../../shared/shared';

@Component({
  selector: 'page-contacts-list',
  templateUrl: 'contacts-list.html'
})

export class ContactsList {

  contacts: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private giftAppApi: GiftAppApi
  ) {}

  itemTapped($event, contact) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ContactItem, {
      contact: contact
    });
  }

  ionViewDidLoad() {
    this.giftAppApi.getContacts().then(data => {
      this.contacts = data;
      console.log(this.contacts);
    });
  }
}
