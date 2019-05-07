import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailerSearchResultsComponent } from './detailer-search-results.component';

describe('DetailerSearchResultsComponent', () => {
  let component: DetailerSearchResultsComponent;
  let fixture: ComponentFixture<DetailerSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailerSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailerSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
