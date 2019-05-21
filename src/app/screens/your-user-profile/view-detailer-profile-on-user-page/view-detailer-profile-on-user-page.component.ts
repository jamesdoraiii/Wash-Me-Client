import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetailerService } from '../../../services/detailer.service';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-view-detailer-profile-on-user-page',
  templateUrl: './view-detailer-profile-on-user-page.component.html',
  styleUrls: ['./view-detailer-profile-on-user-page.component.css']
})
export class ViewDetailerProfileOnUserPageComponent implements OnInit {

  @Input() detailerId: any;

  detailerView: any;

  constructor(private detailerService: DetailerService, private contactService: ContactService) { }

  ngOnInit() {
    console.log(this.detailerId);
    this.detailerService.findSpecificDetailerUserPage(this.detailerId).subscribe(res => {
      console.log("This is a response", res)
      this.detailerView = res;
    })
  }

  @Output() backEvent = new EventEmitter<any>();

  back() {
    this.backEvent.emit()
  }

  contact() {

    var contact = {
      detailerId: this.detailerView.id,
      detailerFname: this.detailerView.fName,
      detailerLname: this.detailerView.lName
    }
    this.contactService.createContact(contact).subscribe(res => {
      console.log(res);
    })

    window.open('mailto:' + this.detailerView.emailAddress + '?subject=Wash Me Detailing Request');
  }

}
