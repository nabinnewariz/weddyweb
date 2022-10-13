import { Component } from '@angular/core';
import { MarriageServicesService } from './services/marriage-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template';
  validLoginData: any = false;
  registrationData: any = true;
  validLoginPage: boolean = true;
  showDetailsData: any = false;

  constructor(public serv: MarriageServicesService) { }

  ngOnInit() {
    this.serv.validLogin.subscribe(data => {
      if(data) {
        this.validLoginData = data;
        this.validLoginPage = false;
      }
    })

    this.serv.getMarriageDataSub.subscribe(data => {
      if (data) {
        this.showDetailsData = data;
        this.validLoginData = false;
      }
    })
  }
}
