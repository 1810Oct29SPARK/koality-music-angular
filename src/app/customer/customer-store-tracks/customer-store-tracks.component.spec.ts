import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStoreTracksComponent } from './customer-store-tracks.component';

describe('CustomerStoreTracksComponent', () => {
  let component: CustomerStoreTracksComponent;
  let fixture: ComponentFixture<CustomerStoreTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerStoreTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStoreTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
