import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MarriageServicesService } from '../services/marriage-services.service';

@Component({
  selector: 'app-view-guest-details',
  templateUrl: './view-guest-details.component.html',
  styleUrls: ['./view-guest-details.component.scss']
})
export class ViewGuestDetailsComponent implements OnInit, OnChanges {
  Details: any;

  constructor(public servic : MarriageServicesService) { }

  ngOnInit(): void {
    this.servic.getMarriageData().subscribe(data => {
      this.Details = data;
      console.log(data,"data");
    })
  }

  ngOnChanges(): void {
    this.servic.getMarriageDataSub.subscribe(data => {
      if (data) {
        this.servic.getMarriageData().subscribe(data => {
          this.Details = data;
          console.log(data,"data calling");
        });
      }
    })
  }

  search() {
    this.servic.getMarriageDataSub.subscribe(data => {
      if (data) {
        this.servic.getMarriageData().subscribe(data => {
          this.Details = data;
          console.log(data,"data calling");
        })
      }
    })
  }

}
