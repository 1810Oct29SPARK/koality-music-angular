import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAlbumListComponent } from './customer-album-list.component';

describe('CustomerAlbumListComponent', () => {
  let component: CustomerAlbumListComponent;
  let fixture: ComponentFixture<CustomerAlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAlbumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
