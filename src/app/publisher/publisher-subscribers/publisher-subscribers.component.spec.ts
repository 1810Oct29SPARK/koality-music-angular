import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherSubscribersComponent } from './publisher-subscribers.component';

describe('PublisherSubscribersComponent', () => {
  let component: PublisherSubscribersComponent;
  let fixture: ComponentFixture<PublisherSubscribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherSubscribersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
