import { Component, OnInit } from '@angular/core';
import   {moveIn,fadeIn,moveInLeft,moveInDown,moveInUp}          from "../../app-animation";

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  animations:[moveInLeft()]
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
