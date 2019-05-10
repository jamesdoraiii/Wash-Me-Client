import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-detailer-profile',
  templateUrl: './display-detailer-profile.component.html',
  styleUrls: ['./display-detailer-profile.component.css']
})
export class DisplayDetailerProfileComponent implements OnInit {

  @Input() detailerViewId: any;

  constructor() { }

  ngOnInit() {
  }

}
