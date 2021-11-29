import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from '../forecast.service';
import { RootObject} from '../models/forecast';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  filterText!: string;
  responseList$!: Observable<RootObject[]>;
  constructor(public forecastService: ForecastService) {}
 
  ngOnInit(): void {
    this.responseList$ = this.forecastService.requestDataFromMultipleSources();
  }

  
}
