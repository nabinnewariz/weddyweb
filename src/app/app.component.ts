import { Component } from '@angular/core';
import { MarriageServicesService } from './services/marriage-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template';
  validLoginData: any = true;
  registrationData: any = true;
  validLoginPage: boolean = true;

  constructor(public serv: MarriageServicesService) { }

  ngOnInit() {
    this.serv.validLogin.subscribe(data => {
      if(data) {
        this.validLoginData = data;
        // this.validLoginPage = false;
      }
    })
  }
}
