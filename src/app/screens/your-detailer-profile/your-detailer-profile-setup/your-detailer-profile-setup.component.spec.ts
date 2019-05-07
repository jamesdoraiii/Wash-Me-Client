import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDetailerProfileSetupComponent } from './your-detailer-profile-setup.component';

describe('YourDetailerProfileSetupComponent', () => {
  let component: YourDetailerProfileSetupComponent;
  let fixture: ComponentFixture<YourDetailerProfileSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourDetailerProfileSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourDetailerProfileSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
