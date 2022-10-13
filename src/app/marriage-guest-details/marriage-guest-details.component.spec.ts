import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageGuestDetailsComponent } from './marriage-guest-details.component';

describe('MarriageGuestDetailsComponent', () => {
  let component: MarriageGuestDetailsComponent;
  let fixture: ComponentFixture<MarriageGuestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriageGuestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriageGuestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
