import { Component,OnInit }              from '@angular/core';
import { ChartsModule}                   from 'ng2-charts';
import {moveIn,moveInLeft}               from "./app-animation";

import {ActivatedRoute,Router,Params}    from '@angular/router';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[moveIn(),moveInLeft()],
  host:{"[@toggle]":"","[@moveInLeft]":""}
  
})
export class AppComponent  implements OnInit{
	stateChat:string="off";
	stateNotifi:string="off";
	newState: string="off";
	ProfileState:string="off";
  focusState:boolean=false;
  private red:boolean=true;

  /*
  *pulse effect
  */
  pulse:boolean=false;

 constructor(private _ActRouter:ActivatedRoute,private _router:Router){}

  ngOnInit(){

  }

  openDrowChat(){
   this.stateChat=(this.stateChat==="off")?"on":"off";
  }
  DropNew(){
   this.newState=(this.newState==="off")?"on":"off";
  }
  showSetting(){
  	this.ProfileState=(this.ProfileState==="off")?"on":"off";
  }
  focusfunc(){
    this.focusState=true;
     document.getElementById("searchInput").classList.remove("inputToggle");
  }
 
 /*
 *
 *add pulse class
 *
 *
 */
 pulseEffect(){
  this.pulse=(this.pulse===false)?true:false;
  
 }


}
