import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-display-detailer-profile',
  templateUrl: './display-detailer-profile.component.html',
  styleUrls: ['./display-detailer-profile.component.css']
})
export class DisplayDetailerProfileComponent implements OnInit {

  @Input() detailerView: any;

  constructor() { }

  ngOnInit() {
  }

  @Output() backEvent = new EventEmitter<any>();

  back() {
    this.backEvent.emit()
  }

  contact(){
    window.open('mailto:'+this.detailerView.emailAddress+'?subject=Wash Me Detailing Request');
  }

}
