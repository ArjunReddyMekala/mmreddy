import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(config: NgbTabsetConfig) {
    config.justify = 'center';
    config.type = 'pills';
  
  }
  ngOnInit() {
  }

}
