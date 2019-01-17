import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTrackListComponent } from './customer-track-list.component';

describe('CustomerTrackListComponent', () => {
  let component: CustomerTrackListComponent;
  let fixture: ComponentFixture<CustomerTrackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTrackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
