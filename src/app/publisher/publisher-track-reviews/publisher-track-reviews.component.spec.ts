import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherTrackReviewsComponent } from './publisher-track-reviews.component';

describe('PublisherTrackReviewsComponent', () => {
  let component: PublisherTrackReviewsComponent;
  let fixture: ComponentFixture<PublisherTrackReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherTrackReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherTrackReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
