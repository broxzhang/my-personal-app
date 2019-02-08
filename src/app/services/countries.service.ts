import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../models/country.model';
import {State} from '../models/state.model';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  url = 'assets/data/data.json';
  constructor(
    private http: HttpClient
  ) { }
  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url).pipe(map((res: any) => {
    return res['countries'];
  } ));
  }
  public getStates(countryID: number): Observable<State[]> {
    const states: State[] = [];
    return this.http.get<Country[]>(this.url).pipe(map((res: any) => {
      for ( let i = 0; i < res['states'].length; i++) {
        if (res['states'][i].countryId.toString() === countryID.toString()) {
          states.push(res['states'][i]);
        }
      }
      return states;
    } ));
  }

}
