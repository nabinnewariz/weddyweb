import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input-box',
  templateUrl: './custom-input-box.component.html',
  styleUrls: ['./custom-input-box.component.scss']
})
export class CustomInputBoxComponent implements OnInit {
  inputVal: any;
  focu: boolean = false;
  @Input() labelInput: any;
  @Input() formType: any;
  @Input() totalFamily: any;
  @Input() dropdown: any;
  @Output() inputValue = new EventEmitter<any>();
  inputDropdown: any;
  itemSelected: any;
  openDropdown: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.inputDropdown = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  }

  ngOnChanges(): void {
    this.inputVal = this.totalFamily;
    if (this.labelInput ==='Total') {
      this.focu = true;
    }
  }

  inputFocus() {
    this.focu = true;
    this.openDropdown = true;
  }

  inputBlur() {
    if (this.inputVal === '' || this.inputVal === undefined || this.inputVal === null) {
      this.focu = false;
    } else {
      this.focu = true;
    }
    setTimeout(()=>{
      this.openDropdown = false;
    }, 600);
    this.inputValue.emit(this.inputVal);
  }

  selectDropdown(val: any) {
    this.inputVal = val;
    this.inputBlur();
  }

}
