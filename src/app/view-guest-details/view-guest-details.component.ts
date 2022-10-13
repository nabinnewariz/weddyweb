import { Component, OnInit } from '@angular/core';
import { MarriageServicesService } from '../services/marriage-services.service';

@Component({
  selector: 'app-view-guest-details',
  templateUrl: './view-guest-details.component.html',
  styleUrls: ['./view-guest-details.component.scss']
})
export class ViewGuestDetailsComponent implements OnInit {
  Details: any;

  constructor(public servic : MarriageServicesService) { }

  ngOnInit(): void {
    this.servic.getMarriageData().subscribe(data => {
      this.Details = data;
      console.log(data,"data");
      
    })
  }

}
