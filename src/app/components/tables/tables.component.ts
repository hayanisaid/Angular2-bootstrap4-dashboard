import { Component, OnInit } from '@angular/core';
import {moveInUp,moveInLeft,moveInRight,moveInDown}   from '../../app-animation';
 
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  animations:[moveInUp(),moveInLeft(),moveInRight(),moveInDown()]
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
