import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsServiceService } from 'src/app/details-service.service';
import { RootObject } from 'src/app/models/details';

@Component({
  selector: 'app-izmir-detail',
  templateUrl: './izmir-detail.component.html',
  styleUrls: ['./izmir-detail.component.css']
})
export class IzmirDetailComponent implements OnInit {
  forecastIzmirDetail$!: Observable<RootObject>;
  constructor(public forecastDetailService: DetailsServiceService) { }

  ngOnInit(): void {
    this.forecastIzmirDetail$ = this.forecastDetailService.getIzmirDetails();
  }

}
