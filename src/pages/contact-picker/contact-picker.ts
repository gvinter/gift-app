import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ContactPicker page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact-picker',
  templateUrl: 'contact-picker.html'
})
export class ContactPicker {
  flowType: any;
  constructor(
    private navCtrl: NavController,
    public navParams: NavParams
  ) {

    this.flowType = navParams.get('flowType');
    console.log(this);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPicker');
  }

}
