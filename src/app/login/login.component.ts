import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MarriageServicesService } from '../services/marriage-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })
  showHome: boolean = false;
  loginPage: boolean = true;
  constructor(public serv : MarriageServicesService) { }

  ngOnInit(): void {
  }

  emailInputValue(val: any) {
    this.loginForm.value.email = val;
  }

  passwordInputValue(val: any) {
    this.loginForm.value.password = val;
  }
  addguestTable() {
    this.serv.sendValidLogin(true); 
  }
  showguestTable() {
    this.serv.showMarriageData(true);
  }
  onSubmit() {
    let paylod = {
      email : this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.serv.login(paylod).subscribe(data => {
      if (data === 'successfull') {
        this.showHome = true;
      }
    })
  }
}
