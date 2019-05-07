import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreenBaseComponent } from './splash-screen-base.component';

describe('SplashScreenBaseComponent', () => {
  let component: SplashScreenBaseComponent;
  let fixture: ComponentFixture<SplashScreenBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashScreenBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashScreenBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
