import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherTrackListComponent } from './publisher-track-list.component';

describe('PublisherTrackListComponent', () => {
  let component: PublisherTrackListComponent;
  let fixture: ComponentFixture<PublisherTrackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherTrackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
