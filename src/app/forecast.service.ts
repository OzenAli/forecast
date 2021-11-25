import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForeCastRootObject } from './models/details';
import { Cities, RootObject } from './models/forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  getCityForeCastDataByName(cityName: string) {
    return this.http.get<ForeCastRootObject>(environment.apiBaseUrl + `forecast?q=${cityName}&appId=${environment.apiKey}&units=metric`)
      .pipe(
        map((data: ForeCastRootObject) => {
          const numberOfDataPoints = 8;
          let foreCastDataToday = data.list.slice(1, (1 + numberOfDataPoints));
          return foreCastDataToday;
        })
      )
  }

  requestDataFromMultipleSources(): Observable<any> {
    const cities = Cities.map((city) => this.getAverageWeatherByCityName(city.name));
    return forkJoin(cities);
  }

  private getAverageWeatherByCityName(cityName: string) {
    return this.http.get(environment.apiBaseUrl + `weather?q=${cityName}&appId=${environment.apiKey}&units=metric`)
  }

}
