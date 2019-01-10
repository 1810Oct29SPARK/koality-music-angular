import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherHomeComponent } from './publisher-home.component';

describe('PublisherHomeComponent', () => {
  let component: PublisherHomeComponent;
  let fixture: ComponentFixture<PublisherHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
