import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../models/contacts.model';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url = 'assets/data/address-book.json';
  constructor(
    private http: HttpClient
  ) { }
  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url).pipe(map((res: any) => {
      console.log(res);
      return res['address-book'];
    }));
  }
}
