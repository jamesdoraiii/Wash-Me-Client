import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DetailerService } from '../../../services/detailer.service';
import { UserService } from '../../../services/user.service';

import { FormGroup, FormControl } from '@angular/forms';
import data from '../../../../assets/locations/US_States_and_Cities.json';




@Component({
  selector: 'app-your-detailer-profile-setup',
  templateUrl: './your-detailer-profile-setup.component.html',
  styleUrls: ['./your-detailer-profile-setup.component.css']
})
export class YourDetailerProfileSetupComponent implements OnInit {

  states = Object.keys(data).sort();

  cities: any;


  detailerSetup = new FormGroup({
    linkToImgur: new FormControl(''),
    servicesOffered: new FormControl(''),
    pricingInformation: new FormControl(''),
    availability: new FormControl(''),
    willTravel: new FormControl(''),
    cities: new FormControl(''),
    state: new FormControl('')
  })

  detailerSend = { detailer: {} }

  detailer = {};

  constructor(private detailerService: DetailerService, private userService: UserService) { }


  ngOnInit() {
  }

  @Output() messageEvent = new EventEmitter();

  onSubmit() {
    this.detailerSend.detailer = this.detailerSetup.value;

    if(this.detailerSetup.controls.linkToImgur.value.slice(0,17) == 'https://imgur.com'){

    this.detailerService.createDetailerProfile(this.detailerSend).subscribe(res => {
      console.log(res);
      localStorage.setItem("detailerStatus", "true");
      this.messageEvent.emit();
    })}

    else{
      alert("Please make sure you are submitting a valid imgur album link");
    }

    this.userService.isDetailerOn(localStorage.getItem('userId')).subscribe();

  }

  getCities() {
    var selectedState = this.detailerSetup.controls['state'].value;

    this.cities = data[selectedState].sort();
    console.log(this.cities);

  }

}
