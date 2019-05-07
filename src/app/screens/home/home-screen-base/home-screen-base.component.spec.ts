import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenBaseComponent } from './home-screen-base.component';

describe('HomeScreenBaseComponent', () => {
  let component: HomeScreenBaseComponent;
  let fixture: ComponentFixture<HomeScreenBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeScreenBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScreenBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
