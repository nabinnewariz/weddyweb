import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuestDetailsComponent } from './view-guest-details.component';

describe('ViewGuestDetailsComponent', () => {
  let component: ViewGuestDetailsComponent;
  let fixture: ComponentFixture<ViewGuestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGuestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
