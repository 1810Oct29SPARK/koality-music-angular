import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStoreFrontComponent } from './customer-store-front.component';

describe('CustomerStoreFrontComponent', () => {
  let component: CustomerStoreFrontComponent;
  let fixture: ComponentFixture<CustomerStoreFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerStoreFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStoreFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
