import { Component, OnInit, Input } from '@angular/core';
import {Restorant} from './restorant.model'

@Component({
  selector: 'mt-restorant',
  templateUrl: './restorant.component.html'
})
export class RestorantComponent implements OnInit {

  @Input() restorant: Restorant  

  constructor() { }

  ngOnInit() {
  }

}
