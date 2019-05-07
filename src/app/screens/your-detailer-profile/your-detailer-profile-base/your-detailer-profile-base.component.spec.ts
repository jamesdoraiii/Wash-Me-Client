import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDetailerProfileBaseComponent } from './your-detailer-profile-base.component';

describe('YourDetailerProfileBaseComponent', () => {
  let component: YourDetailerProfileBaseComponent;
  let fixture: ComponentFixture<YourDetailerProfileBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourDetailerProfileBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourDetailerProfileBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
