import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MarriageServicesService } from '../services/marriage-services.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  name = new FormControl('');
  constructor(public marriageServices : MarriageServicesService, public serve: MarriageServicesService) { }
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    mobilenumber: new FormControl(),
    password: new FormControl(),
    confirmpassword: new FormControl()
  })
  ngOnInit(): void {
  }

  fNameInputValue(val: any) {
    this.contactForm.value.firstname = val;
  }
  lNameInputValue(val: any) {
    this.contactForm.value.lastname = val;
  }
  emailInputValue(val: any) {
    this.contactForm.value.email = val;
  }
  mobNumInputValue(val: any) {
    this.contactForm.value.mobilenumber = val;
  }
  pwInputValue(val: any) {
    this.contactForm.value.password = val;
  }
  conPWInputValue(val: any) {
    this.contactForm.value.confirmpassword = val;
  }
  onSubmit() {
    let regData:any = {
        "firstname": this.contactForm.value.firstname,
        "lastname": this.contactForm.value.lastname,
        "email": this.contactForm.value.email,
        "mobileNumber": this.contactForm.value.mobilenumber, 
        "password": this.contactForm.value.password,
        "confirmPassword": this.contactForm.value.confirmpassword
    }
    this.marriageServices.registration(regData).subscribe(data => {
      console.log(data)
    })
    console.log(this.contactForm,"this.contactForm.value", this.contactForm.value);
    firstname: new FormControl('', [Validators.required,Validators.minLength(10)])
  }

  getData() {
    this.serve.getMarriageData().subscribe(data => {
      console.log(data," guest data details")
    })
  }
}
