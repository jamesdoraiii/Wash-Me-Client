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

  states = Object.keys(data);

  cities: any;

  @Input() detailer: any;

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

  constructor(private detailerService: DetailerService) { }

  @Output() updateEvent = new EventEmitter();

  ngOnInit() {
    this.detailerSetup.controls.linkToImgur.setValue(this.detailer.linkToImgur);
    this.detailerSetup.controls.servicesOffered.setValue(this.detailer.servicesOffered);
    this.detailerSetup.controls.pricingInformation.setValue(this.detailer.pricingInformation);
    this.detailerSetup.controls.availability.setValue(this.detailer.availability);
    this.detailerSetup.controls.willTravel.setValue(this.detailer.willTravel);
    this.detailerSetup.controls.cities.setValue(this.detailer.cities);
    this.detailerSetup.controls.state.setValue(this.detailer.state);

  }

  onSubmit() {
    this.detailerSend.detailer = this.detailerSetup.value;

    this.detailerService.updateDetailerProfile(this.detailerSend).subscribe(res => {
      console.log(res);
      this.updateEvent.emit();

    })
  }

  getCities() {
    var selectedState = this.detailerSetup.controls['state'].value;

    this.cities = data[selectedState];
    console.log(this.cities);

  }


}
