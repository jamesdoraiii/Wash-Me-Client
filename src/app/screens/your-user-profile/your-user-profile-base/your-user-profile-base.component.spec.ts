import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourUserProfileBaseComponent } from './your-user-profile-base.component';

describe('YourUserProfileBaseComponent', () => {
  let component: YourUserProfileBaseComponent;
  let fixture: ComponentFixture<YourUserProfileBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourUserProfileBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourUserProfileBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
