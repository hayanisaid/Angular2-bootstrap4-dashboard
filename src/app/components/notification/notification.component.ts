import { Component, OnInit } from '@angular/core';
import {moveInRight,notifyTop,notifyLeft,notifyBottom} from '../../app-animation';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations:[moveInRight(),notifyTop(),notifyLeft(),notifyBottom()]
})
export class NotificationComponent implements OnInit {

  right:boolean=false;
  left:boolean=false;
  top:boolean=false;
  bottom:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  // push notofication function
  notifRight(){
   this.right=(this.right===false)?true:false;
   setTimeout(()=>this.right=false,1000);
  }
   notifLeft(){
   this.left=(this.left===false)?true:false;
   setTimeout(()=>this.left=false,1000);
  }
   notifTop(){
   this.top=(this.top===false)?true:false;
 setTimeout(()=>this.top=false,1000);
  }
   notifBottom(){
   this.bottom=(this.bottom===false)?true:false;
   setTimeout(()=>this.bottom=false,1000);
  }

}
