import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherProfileEditComponent } from './publisher-profile-edit.component';

describe('PublisherProfileEditComponent', () => {
  let component: PublisherProfileEditComponent;
  let fixture: ComponentFixture<PublisherProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
