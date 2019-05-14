import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../../services/contact.service';


@Component({
  selector: 'app-detailer-search-results',
  templateUrl: './detailer-search-results.component.html',
  styleUrls: ['./detailer-search-results.component.css']
})
export class DetailerSearchResultsComponent implements OnInit {

  @Input() searchData: any;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  @Output() messageEvent = new EventEmitter<any>();
  @Output() contactEvent = new EventEmitter<any>();
  @Output() viewDetailerEvent = new EventEmitter<any>();

  newSearch() {
    this.messageEvent.emit();
  }

  contactDetailer(detailerEmail, detailerId, detailerFname, detailerLname) {

    var contact = {
      detailerId: detailerId,
      detailerFname: detailerFname,
      detailerLname: detailerLname
    }
    this.contactService.createContact(contact).subscribe(res => {
      console.log(res);
    })
    window.open('mailto:'+detailerEmail+'?subject=Wash Me Detailing Request');
  }

  viewDetailer(detailer) {
    this.viewDetailerEvent.emit(detailer);
  }

}
