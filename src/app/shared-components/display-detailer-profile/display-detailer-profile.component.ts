import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-display-detailer-profile',
  templateUrl: './display-detailer-profile.component.html',
  styleUrls: ['./display-detailer-profile.component.css']
})
export class DisplayDetailerProfileComponent implements OnInit {

  @Input() detailerView: any;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  @Output() backEvent = new EventEmitter<any>();

  back() {
    this.backEvent.emit()
  }

  contact(){
    
    var contact = {
      detailerId: this.detailerView.id,
      detailerFname: this.detailerView.fName,
      detailerLname: this.detailerView.lName
    }
    this.contactService.createContact(contact).subscribe(res => {
      console.log(res);
    })

    window.open('mailto:'+this.detailerView.emailAddress+'?subject=Wash Me Detailing Request');
  }

}
