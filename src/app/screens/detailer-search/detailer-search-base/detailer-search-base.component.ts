import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailer-search-base',
  templateUrl: './detailer-search-base.component.html',
  styleUrls: ['./detailer-search-base.component.css']
})
export class DetailerSearchBaseComponent implements OnInit {
  
  status = 'search';

  constructor() { }

  ngOnInit() {
  }

}
