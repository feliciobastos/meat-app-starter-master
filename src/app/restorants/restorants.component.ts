import { Component, OnInit } from '@angular/core';
import {Restorant} from './restorant/restorant.model'
import {RestorantsService} from './restorants.service'

@Component({
  selector: 'mt-restorants',
  templateUrl: './restorants.component.html'
})
export class RestorantsComponent implements OnInit {

  restorants : Restorant[] 

  constructor(private restorantService: RestorantsService) { }

  ngOnInit() {

    this.restorantService.restorants

  }

}
