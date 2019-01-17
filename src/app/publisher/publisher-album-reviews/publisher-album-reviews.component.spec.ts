import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherAlbumReviewsComponent } from './publisher-album-reviews.component';

describe('PublisherAlbumReviewsComponent', () => {
  let component: PublisherAlbumReviewsComponent;
  let fixture: ComponentFixture<PublisherAlbumReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherAlbumReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherAlbumReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
