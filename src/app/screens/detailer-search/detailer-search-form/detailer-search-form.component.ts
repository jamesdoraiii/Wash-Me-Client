import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailer-search-form',
  templateUrl: './detailer-search-form.component.html',
  styleUrls: ['./detailer-search-form.component.css']
})
export class DetailerSearchFormComponent implements OnInit {


  //This is where the information from the dealer search form is stored
  searchInfo =  {
    state: "",
    city: ""
  };

  constructor() { }

  ngOnInit() {
  }


  //This is the function that is called when you press the search button. This is where you will connect with the search function on the detailer service.
  submitSearch() {
    console.log(this.searchInfo);


  }

}
