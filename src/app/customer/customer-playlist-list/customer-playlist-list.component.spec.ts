import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPlaylistListComponent } from './customer-playlist-list.component';

describe('CustomerPlaylistListComponent', () => {
  let component: CustomerPlaylistListComponent;
  let fixture: ComponentFixture<CustomerPlaylistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPlaylistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPlaylistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
