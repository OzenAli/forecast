import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { ForecastService } from '../forecast.service';
import { List } from '../models/details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  foreCastDataList: List[] = [];
  cityName!: string;
  index: number = 8;

  constructor(private activatedRoute: ActivatedRoute,
              private forecastService: ForecastService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.cityName = params.get('name') || ' ';
        return this.forecastService.getCityForeCastDataByName(this.cityName);
      })
    ).subscribe(data => {
      this.foreCastDataList = data;
    })
  }

}
