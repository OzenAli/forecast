import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsServiceService } from 'src/app/details-service.service';
import { RootObject } from 'src/app/models/details';

@Component({
  selector: 'app-ist-detail',
  templateUrl: './ist-detail.component.html',
  styleUrls: ['./ist-detail.component.css']
})
export class IstDetailComponent implements OnInit {
  forecastIstDetail$!: Observable<RootObject>;
  constructor(public forecastDetailService: DetailsServiceService) { }

  ngOnInit(): void {
    this.forecastIstDetail$ = this.forecastDetailService.getIstDetails();
  }

}
