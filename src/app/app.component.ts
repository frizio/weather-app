import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public weatherData;

  constructor(
    private weatherService: WeatherService
  ) {  }

  ngOnInit(): void {

  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode)
      .subscribe(
        response => {
          console.log(response);
          this.weatherData = response;
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
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please Insert some value');
    }
    cityName.focus();
    return false;
  }

}
