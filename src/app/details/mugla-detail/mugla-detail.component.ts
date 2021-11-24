import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsServiceService } from 'src/app/details-service.service';
import { RootObject } from 'src/app/models/details';

@Component({
  selector: 'app-mugla-detail',
  templateUrl: './mugla-detail.component.html',
  styleUrls: ['./mugla-detail.component.css']
})
export class MuglaDetailComponent implements OnInit {
  forecastMuglaDetail$!: Observable<RootObject>;
  constructor(public forecastDetailService: DetailsServiceService) { }

  ngOnInit(): void {
    this.forecastMuglaDetail$ = this.forecastDetailService.getMuglaDetails();
  }

}
