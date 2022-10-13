import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MarriageServicesService } from '../services/marriage-services.service';
@Component({
  selector: 'app-marriage-guest-details',
  templateUrl: './marriage-guest-details.component.html',
  styleUrls: ['./marriage-guest-details.component.scss']
})
export class MarriageGuestDetailsComponent implements OnInit {
  guestDetailsForm = new FormGroup({
    fName : new FormControl(),
    lName : new FormControl(),
    location : new FormControl(),
    Veggie : new FormControl(),
    Chicken : new FormControl(),
    Mutton : new FormControl(),
    Fish : new FormControl(),
    total : new FormControl()
  })
  totalFamily: number = 0;
  constructor(public serve: MarriageServicesService) { }

  ngOnInit(): void {
    this.guestDetailsForm.value.Veggie = 0;
    this.guestDetailsForm.value.Chicken = 0;
    this.guestDetailsForm.value.Mutton = 0;
    this.guestDetailsForm.value.Fish = 0;
  }
  fNameInputValue(val: any) {
    this.guestDetailsForm.value.fName = val;
  }
  lNameInputValue(val: any) {
    this.guestDetailsForm.value.lName = val;
  }
  locationInputValue(val: any) {
    this.guestDetailsForm.value.location = val;
  }
  VeggieInputValue(val: any) {
    console.log(val,"value")
    this.guestDetailsForm.value.Veggie = val;
    this.totalMember()
  }
  ChickenInputValue(val: any) {
    this.guestDetailsForm.value.Chicken = val;
    this.totalMember()
  }
  MuttonInputValue(val: any) {
    this.guestDetailsForm.value.Mutton = val;
    this.totalMember();
  }
  FishInputValue(val: any) {
    this.guestDetailsForm.value.Fish = val;
    this.totalMember();
  }
  totalMember() {
    this.totalFamily = Number(this.guestDetailsForm.value?.Veggie) + Number(this.guestDetailsForm.value?.Chicken) + 
    Number(this.guestDetailsForm.value?.Mutton) + Number(this.guestDetailsForm.value?.Fish);
    console.log(this.guestDetailsForm,"guestDetailsForm", this.totalFamily)
  }

  onSubmit() {
    let payload = {
      // selectVistor : true,
      firstname : this.guestDetailsForm.value.fName,
      lastname : this.guestDetailsForm.value.lName,
      location : this.guestDetailsForm.value.location,
      Veggie : this.guestDetailsForm.value.Veggie,
      chicken : this.guestDetailsForm.value.Chicken,
      mutton : this.guestDetailsForm.value.Mutton,
      fish : this.guestDetailsForm.value.Fish,
      total : this.totalFamily
    }
    this.serve.marriageData(payload).subscribe(data => {
      console.log(data," guest data details")
    })
    setTimeout(()=> {
      this.guestDetailsForm.reset();
    }, 200);
    this.serve.getMarriageData().subscribe(data => {
      console.log(data," guest data details")
    });
    this.serve.showMarriageData(true);
  }


  getData() {
    this.serve.getMarriageData().subscribe(data => {
      console.log(data," guest data details")
    })
  }
}
