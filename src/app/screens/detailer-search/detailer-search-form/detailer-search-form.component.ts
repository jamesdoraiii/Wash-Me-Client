import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DetailerService } from "../../../services/detailer.service";


@Component({
  selector: 'app-detailer-search-form',
  templateUrl: './detailer-search-form.component.html',
  styleUrls: ['./detailer-search-form.component.css']
})
export class DetailerSearchFormComponent implements OnInit {


  //This is where the information from the dealer search form is stored
  searchInfo =  {
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

}
