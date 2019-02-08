import { Component, OnInit } from '@angular/core';
import {CountriesService} from 'src/app/services/countries.service';
import {Country} from '../../models/country.model';
import {State} from '../../models/state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public countries: Country[] = [];
  public states: State[] = [];
  public selectedCountry: Country;
  constructor(private countryService: CountriesService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(
      data => {
        this.countries = data;
        console.log(this.countries);
      }
    );
    console.log(this.selectedCountry);
  }
  selectChange(value) {
    this.countryService.getStates(value).subscribe(
      data => {
        this.states = data;
      }
    );
    console.log(this.states);
  }
}
