import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { GiftApp } from './app.component';

import { GiftList, Contacts, ContactItem, ContactPicker, EventItem } from '../pages/pages';

@NgModule({
  declarations: [
    GiftApp,
    GiftList,
    Contacts,
    ContactItem,
    ContactPicker,
    EventItem
  ],
  imports: [
    IonicModule.forRoot(GiftApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GiftApp,
    GiftList,
    Contacts,
    ContactItem,
    ContactPicker,
    EventItem
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

export class AppModule {}
