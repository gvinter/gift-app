import { Component, ViewChild } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { GiftList, ContactsList } from '../pages/pages';
import { GiftAppApi } from '../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers: [
    GiftAppApi,
    HttpModule
  ]
})
export class GiftApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GiftList;

  pages: Array<{title: string, component: any}>;

  constructor( public platform: Platform ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Gift List', component: GiftList },
      { title: 'People', component: ContactsList }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
