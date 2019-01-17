import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherPublishTrackComponent } from './publisher-publish-track.component';

describe('PublisherPublishTrackComponent', () => {
  let component: PublisherPublishTrackComponent;
  let fixture: ComponentFixture<PublisherPublishTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherPublishTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherPublishTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
