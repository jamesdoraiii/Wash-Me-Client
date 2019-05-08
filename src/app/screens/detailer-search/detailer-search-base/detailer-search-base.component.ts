import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailer-search-base',
  templateUrl: './detailer-search-base.component.html',
  styleUrls: ['./detailer-search-base.component.css']
})
export class DetailerSearchBaseComponent implements OnInit {
  
  status = 'search';
  searchResults: any;

  constructor() { }

  ngOnInit() {
  }

  receiveSearchInfo($event) {
    this.searchResults = $event;
    console.log("this is the results", this.searchResults);
    this.status='results'
  }

  receiveNewSearch($event) {
    this.searchResults = [];
    this.status = 'search';
  }
}
