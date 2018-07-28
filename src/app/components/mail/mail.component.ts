import { Component, OnInit } from '@angular/core';
import {moveInDown,moveInLeft,moveInUp} from '../../app-animation';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  animations:[moveInDown(),moveInLeft(),moveInUp()]
})
export class MailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
