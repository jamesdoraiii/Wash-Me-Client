import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailerProfileOnUserPageComponent } from './view-detailer-profile-on-user-page.component';

describe('ViewDetailerProfileOnUserPageComponent', () => {
  let component: ViewDetailerProfileOnUserPageComponent;
  let fixture: ComponentFixture<ViewDetailerProfileOnUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailerProfileOnUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailerProfileOnUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
