import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gift-item',
  templateUrl: 'gift-item.html'
})

export class GiftItem {

  constructor(private navCtrl: NavController, private navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftItemPage');
  }

}
