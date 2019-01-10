import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMusicPlayerComponent } from './customer-music-player.component';

describe('CustomerMusicPlayerComponent', () => {
  let component: CustomerMusicPlayerComponent;
  let fixture: ComponentFixture<CustomerMusicPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMusicPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
