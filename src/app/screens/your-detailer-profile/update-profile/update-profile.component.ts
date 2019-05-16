import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { DetailerService } from '../../../services/detailer.service';

import { FormGroup, FormControl } from '@angular/forms';
import data from '../../../../assets/locations/US_States_and_Cities.json';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  states = Object.keys(data).sort();

  cities: any;

  @Input() detailer: any;

  detailerSetup = new FormGroup({
    linkToImgur: new FormControl(null),
    servicesOffered: new FormControl(null),
    pricingInformation: new FormControl(null),
    availability: new FormControl(null),
    willTravel: new FormControl(null),
    cities: new FormControl(null),
    state: new FormControl(null)
  })

  detailerSend = { detailer: {} }

  constructor(private detailerService: DetailerService) { }

  @Output() updateEvent = new EventEmitter();

  ngOnInit() {

    this.detailerSetup.controls.linkToImgur.setValue(this.detailer.linkToImgur);
    this.detailerSetup.controls.servicesOffered.setValue(this.detailer.servicesOffered);
    this.detailerSetup.controls.pricingInformation.setValue(this.detailer.pricingInformation);
    this.detailerSetup.controls.availability.setValue(this.detailer.availability);
    // this.detailerSetup.controls.willTravel.setValue(this.detailer.willTravel);
    // this.detailerSetup.controls.cities.setValue(this.detailer.cities);
    // this.detailerSetup.controls.state.setValue(this.detailer.state);

  }

  onSubmit() {

    this.detailerSend.detailer = this.detailerSetup.value;

  
    if(this.detailerSetup.controls.linkToImgur.value.slice(0,17) == 'https://imgur.com'){

    this.detailerService.updateDetailerProfile(this.detailerSend).subscribe(res => {
      console.log(res);
      this.updateEvent.emit();

    })}

    else{
      alert("Please make sure you are submitting a valid imgur album link");
    }

  }

  getCities() {
    var selectedState = this.detailerSetup.controls['state'].value;

    this.cities = data[selectedState].sort();
    console.log(this.cities);

  }


}
