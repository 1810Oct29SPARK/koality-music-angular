import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherAlbumListComponent } from './publisher-album-list.component';

describe('PublisherAlbumListComponent', () => {
  let component: PublisherAlbumListComponent;
  let fixture: ComponentFixture<PublisherAlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherAlbumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
