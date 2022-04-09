import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookedListingComponent } from './view-booked-listing.component';

describe('ViewBookedListingComponent', () => {
  let component: ViewBookedListingComponent;
  let fixture: ComponentFixture<ViewBookedListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookedListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
