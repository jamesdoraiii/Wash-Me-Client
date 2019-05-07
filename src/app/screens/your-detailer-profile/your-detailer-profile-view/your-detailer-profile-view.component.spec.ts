import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDetailerProfileViewComponent } from './your-detailer-profile-view.component';

describe('YourDetailerProfileViewComponent', () => {
  let component: YourDetailerProfileViewComponent;
  let fixture: ComponentFixture<YourDetailerProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourDetailerProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourDetailerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
