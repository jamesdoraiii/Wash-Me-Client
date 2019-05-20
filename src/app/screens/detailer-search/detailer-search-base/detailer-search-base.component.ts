import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailer-search-base',
  templateUrl: './detailer-search-base.component.html',
  styleUrls: ['./detailer-search-base.component.css']
})
export class DetailerSearchBaseComponent implements OnInit {
  
  status = 'search';
  searchResults: any;
  detailerEmail: any;
  detailerView: any;

  constructor() { }

  ngOnInit() {
  }

  receiveSearchInfo($event) {
    this.searchResults = $event;
    console.log("this is the results", this.searchResults);
    this.status='results'
  }

  receiveNewSearch() {
    this.searchResults = [];
    this.status = 'search';
  }

  receiveContact(detailerEmail) {
    this.status = 'contact';
    this.detailerEmail = detailerEmail;
    console.log(detailerEmail);
  }

  receiveProfileView(detailer) {
    this.status = 'profile';
    this.detailerView = detailer;
//test
  }

  receiveBack(){
    this.status='results'
  }
}
