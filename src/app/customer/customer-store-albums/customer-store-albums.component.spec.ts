import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStoreAlbumsComponent } from './customer-store-albums.component';

describe('CustomerStoreAlbumsComponent', () => {
  let component: CustomerStoreAlbumsComponent;
  let fixture: ComponentFixture<CustomerStoreAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerStoreAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStoreAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
