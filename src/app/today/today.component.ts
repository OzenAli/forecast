import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsServiceService } from '../details-service.service';
import { ForecastService } from '../forecast.service';
import { RootObject} from '../models/forecast';



@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  forecastBursa$!: Observable<RootObject>;
  forecastIst$!: Observable<RootObject>;
  forecastAydin$!: Observable<RootObject>;
  forecastMugla$!: Observable<RootObject>;
  forecastIzmir$!: Observable<RootObject>;
  constructor(public forecastService: ForecastService) { 
  }

  ngOnInit(): void {
    this.forecastBursa$ = this.forecastService.getBursaForeCast();
    this.forecastIst$ = this.forecastService.getIstForeCast();
    this.forecastAydin$ = this.forecastService.getAydinForeCast();
    this.forecastMugla$ = this.forecastService.getMuglaForeCast();
    this.forecastIzmir$ = this.forecastService.getIzmirForeCast();
  }

}
