import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detailer-search-results',
  templateUrl: './detailer-search-results.component.html',
  styleUrls: ['./detailer-search-results.component.css']
})
export class DetailerSearchResultsComponent implements OnInit {

  @Input() searchData: any;

  constructor() { }

  ngOnInit() {
  }

  @Output() messageEvent = new EventEmitter<any>();

  newSearch() {
    this.messageEvent.emit();
  }

}
