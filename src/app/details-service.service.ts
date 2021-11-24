import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from './models/details';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {
  apiUrlBursa:string = ('https://api.openweathermap.org/data/2.5/forecast?q=Bursa,tr&appid=89e03a4c80ca6bba9253704bfa59e514');
  apiUrlIst:string = ('https://api.openweathermap.org/data/2.5/forecast?q=Istanbul,tr&appid=89e03a4c80ca6bba9253704bfa59e514');
  apiUrlAydin:string = ('https://api.openweathermap.org/data/2.5/forecast?q=Aydin,tr&appid=89e03a4c80ca6bba9253704bfa59e514');
  apiUrlMugla:string = ('https://api.openweathermap.org/data/2.5/forecast?q=Mugla,tr&appid=89e03a4c80ca6bba9253704bfa59e514');
  apiUrlIzmir:string = ('https://api.openweathermap.org/data/2.5/forecast?q=Izmir,tr&appid=89e03a4c80ca6bba9253704bfa59e514');

  constructor(private http:HttpClient) { }

  getBursaDetails():Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlBursa);
  }

  getIstDetails():Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlIst);
  }
  
  getAydinDetails():Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlAydin);
  }

  getMuglaDetails():Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlMugla);
  }

  getIzmirDetails():Observable<RootObject>{
    return this.http.get<RootObject>(this.apiUrlIzmir);
  }
}
