import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewADetailerProfileBaseComponent } from './view-a-detailer-profile-base.component';

describe('ViewADetailerProfileBaseComponent', () => {
  let component: ViewADetailerProfileBaseComponent;
  let fixture: ComponentFixture<ViewADetailerProfileBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewADetailerProfileBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewADetailerProfileBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
