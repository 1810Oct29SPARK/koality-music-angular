import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherPublishAlbumComponent } from './publisher-publish-album.component';

describe('PublisherPublishAlbumComponent', () => {
  let component: PublisherPublishAlbumComponent;
  let fixture: ComponentFixture<PublisherPublishAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherPublishAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherPublishAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
