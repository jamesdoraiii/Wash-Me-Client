import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailerSearchFormComponent } from './detailer-search-form.component';

describe('DetailerSearchFormComponent', () => {
  let component: DetailerSearchFormComponent;
  let fixture: ComponentFixture<DetailerSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailerSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailerSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
