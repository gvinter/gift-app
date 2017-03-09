import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GiftAppApi } from '../../shared/shared';

@Component({
  selector: 'page-contact-item',
  templateUrl: 'contact-item.html'
})
export class ContactItem {
  currentContact: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private giftAppApi: GiftAppApi
  ) {}

  ionViewDidLoad() {
    let selectedContact = this.navParams.data;
    console.log(selectedContact);
    // this.giftAppApi.getContactData(selectedContact.id).subscribe(data => {
      // console.log(data);
      // this.currentContact = data.contact;
    // })
  }
}
