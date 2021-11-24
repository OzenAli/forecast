import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsServiceService } from 'src/app/details-service.service';
import { RootObject } from 'src/app/models/details';

@Component({
  selector: 'app-bursa-detail',
  templateUrl: './bursa-detail.component.html',
  styleUrls: ['./bursa-detail.component.css']
})
export class BursaDetailComponent implements OnInit {
  forecastBursaDetail$!: Observable<RootObject>;
  constructor(public forecastDetailService: DetailsServiceService) { }

  ngOnInit(): void {
    this.forecastBursaDetail$ = this.forecastDetailService.getBursaDetails();
    // this.forecastBursaDetail$.subscribe(data =>{
    //   console.log(data);
    // })
   
  }

}
