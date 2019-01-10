import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAlbumDetailComponent } from './customer-album-detail.component';

describe('CustomerAlbumDetailComponent', () => {
  let component: CustomerAlbumDetailComponent;
  let fixture: ComponentFixture<CustomerAlbumDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAlbumDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAlbumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
