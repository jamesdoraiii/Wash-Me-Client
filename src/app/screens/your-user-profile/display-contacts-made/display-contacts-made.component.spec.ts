import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContactsMadeComponent } from './display-contacts-made.component';

describe('DisplayContactsMadeComponent', () => {
  let component: DisplayContactsMadeComponent;
  let fixture: ComponentFixture<DisplayContactsMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayContactsMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayContactsMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
