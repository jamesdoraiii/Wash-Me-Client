import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailerSearchBaseComponent } from './detailer-search-base.component';

describe('DetailerSearchBaseComponent', () => {
  let component: DetailerSearchBaseComponent;
  let fixture: ComponentFixture<DetailerSearchBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailerSearchBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailerSearchBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
