import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalListingsComponent } from './rental-listings.component';

describe('RentalListingsComponent', () => {
  let component: RentalListingsComponent;
  let fixture: ComponentFixture<RentalListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
