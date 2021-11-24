import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from './models/forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  apiUrlBursa:string = ('https://api.openweathermap.org/data/2.5/weather?q=Bursa&appid=89e03a4c80ca6bba9253704bfa59e514');
  apiUrlIst:string = ('https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=89e03a4c80ca6bba9253704bfa59e514');
  apiUrlAydin:string = ('https://api.openweathermap.org/data/2.5/weather?q=Aydin&appid=89e03a4c80ca6bba9253704bfa59e514');
  apiUrlMugla:string = ('https://api.openweathermap.org/data/2.5/weather?q=Mugla&appid=89e03a4c80ca6bba9253704bfa59e514');
  apiUrlIzmir:string = ('https://api.openweathermap.org/data/2.5/weather?q=Izmir&appid=89e03a4c80ca6bba9253704bfa59e514');
  

  constructor(private http: HttpClient) { }

  getBursaForeCast():Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlBursa);
  }

  getIstForeCast(): Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlIst);
  }

  getAydinForeCast(): Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlAydin);
  }

  getMuglaForeCast(): Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlMugla);
  }

  getIzmirForeCast(): Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlIzmir);
  }

  

  
}