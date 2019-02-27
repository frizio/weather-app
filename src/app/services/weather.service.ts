import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIVERSION = '2.5';
  APIKEY = '4442c84151025f9500ba16a03da3dc68';
  URI: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URI = `https://api.openweathermap.org/data/${this.APIVERSION}/weather?appid=${this.APIKEY}`;
  }

  getWeather(cityName: string, countryCode: string) {
    return this.httpClient.get(`${this.URI}&${cityName},${countryCode}`);
  }

}
