import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { GiftApp } from './app.component';

import { GiftList, ContactsList, ContactItem, ContactPicker, EventItem, GiftItem } from '../pages/pages';

@NgModule({
  declarations: [
    GiftApp,
    GiftList,
    ContactsList,
    ContactItem,
    ContactPicker,
    EventItem,
    GiftItem
  ],
  imports: [
    IonicModule.forRoot(GiftApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GiftApp,
    GiftList,
    ContactsList,
    ContactItem,
    ContactPicker,
    EventItem,
    GiftItem
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

export class AppModule {}
