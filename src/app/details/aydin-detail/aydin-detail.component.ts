import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsServiceService } from 'src/app/details-service.service';
import { RootObject } from 'src/app/models/details';

@Component({
  selector: 'app-aydin-detail',
  templateUrl: './aydin-detail.component.html',
  styleUrls: ['./aydin-detail.component.css']
})
export class AydinDetailComponent implements OnInit {
  forecastAydinDetail$!: Observable<RootObject>;
  constructor(public forecastDetailService: DetailsServiceService) { }

  ngOnInit(): void {
    this.forecastAydinDetail$ = this.forecastDetailService.getAydinDetails();
  }

}
