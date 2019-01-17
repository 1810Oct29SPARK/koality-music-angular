import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPlaylistDetailComponent } from './customer-playlist-detail.component';

describe('CustomerPlaylistDetailComponent', () => {
  let component: CustomerPlaylistDetailComponent;
  let fixture: ComponentFixture<CustomerPlaylistDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPlaylistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPlaylistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
