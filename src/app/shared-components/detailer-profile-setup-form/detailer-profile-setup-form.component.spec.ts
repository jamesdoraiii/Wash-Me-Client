import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailerProfileSetupFormComponent } from './detailer-profile-setup-form.component';

describe('DetailerProfileSetupFormComponent', () => {
  let component: DetailerProfileSetupFormComponent;
  let fixture: ComponentFixture<DetailerProfileSetupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailerProfileSetupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailerProfileSetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
