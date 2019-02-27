import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) {  }

  ngOnInit(): void {
    this.getWeather('london', 'uk');
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    console.log('Submit the location');
    console.log(cityName.value);
    console.log(countryCode.value);
    cityName.value = '';
    countryCode.value = '';
    cityName.focus();
    return false;
  }

}
