import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailerProfileComponent } from './display-detailer-profile.component';

describe('DisplayDetailerProfileComponent', () => {
  let component: DisplayDetailerProfileComponent;
  let fixture: ComponentFixture<DisplayDetailerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDetailerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
