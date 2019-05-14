import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DetailerService } from "../../../services/detailer.service";

import data from '../../../../assets/locations/US_States_and_Cities.json';


@Component({
  selector: 'app-detailer-search-form',
  templateUrl: './detailer-search-form.component.html',
  styleUrls: ['./detailer-search-form.component.css']
})
export class DetailerSearchFormComponent implements OnInit {

  states = Object.keys(data);

  cities: any;

  //This is where the information from the dealer search form is stored
  searchInfo = {
    state: "",
    cities: ""
  };

  @Output() messageEvent = new EventEmitter<any>();


  constructor(private detailerService: DetailerService) { }

  ngOnInit() {
  }


  //This is the function that is called when you press the search button. This is where you will connect with the search function on the detailer service.
  submitSearch() {

    this.detailerService.searchByLocation(this.searchInfo).subscribe(res => {
      console.log(res);
      this.messageEvent.emit(res);
    })


  }

  getCities() {
    console.log(this.searchInfo)
    var selectedState = this.searchInfo.state;

    this.cities = data[selectedState];
    console.log(this.cities);

  }

}
