import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GiftAppApi {

  private baseUrl = 'https://giftapp-e0350.firebaseio.com/';
  currentEvent: any = {};
  currentContact: any = {};

  constructor(private http: Http) {}

  // Events
  getEvents() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/events.json`)
          .subscribe(res => resolve(res.json()));
    });
  }

  // Event Single
  getEventData(eventId) : Observable<any> {
    return this.http.get(`${this.baseUrl}/events-data/${eventId}.json`)
      .map((response: Response) => {
        this.currentEvent = response.json();
        return this.currentEvent;
      })
  }

  // Contacts
  getContacts() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/contacts.json`)
          .subscribe(res => resolve(res.json()));
    });
  }

  // Contact Single
  getContactData(contactId) : Observable<any> {
    return this.http.get(`${this.baseUrl}/contacts-data/${contactId}.json`)
      .map((response: Response) => {
        this.currentContact = response.json();
        return this.currentContact;
      })
  }


  getGifts() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/gifts.json`)
          .subscribe(res => resolve(res.json()));
    });
  }
}
