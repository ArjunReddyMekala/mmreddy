import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mservices',
  templateUrl: './mservices.component.html',
  styleUrls: ['./mservices.component.css']
})
export class MservicesComponent  implements OnInit {

  constructor(config: NgbTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }
  ngOnInit() {
  }

}
