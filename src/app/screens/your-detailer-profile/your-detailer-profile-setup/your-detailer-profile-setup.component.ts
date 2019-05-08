import { Component, OnInit } from '@angular/core';

import { DetailerService } from '../../../services/detailer.service'

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-your-detailer-profile-setup',
  templateUrl: './your-detailer-profile-setup.component.html',
  styleUrls: ['./your-detailer-profile-setup.component.css']
})
export class YourDetailerProfileSetupComponent implements OnInit {

  detailerSetup = new FormGroup({
    linkToImgur: new FormControl(''),
    servicesOffered: new FormControl(''),
    pricingInformation: new FormControl(''),
    availability: new FormControl(''),
    willTravel: new FormControl(''),
    cities: new FormControl(''),
    state: new FormControl('')
  })

  detailer = {};

  constructor(private detailerService: DetailerService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.detailer = this.detailerSetup.value;

    this.detailerService.createDetailerProfile(this.detailer).subscribe(res =>{
      console.log(res);
    })


  }

}
