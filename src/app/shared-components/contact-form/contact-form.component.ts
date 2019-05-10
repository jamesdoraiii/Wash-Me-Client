import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Input() detailerContactId: any;

  constructor() { }

  ngOnInit() {
    console.log("this is the contact form and the id i have is", this.detailerContactId)
  }

}
