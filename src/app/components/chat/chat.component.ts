import { Component, OnInit } from '@angular/core';
import   {moveInDown,moveInLeft}          from "../../app-animation";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations:[moveInDown(),moveInLeft()]

  
})
export class ChatComponent implements OnInit {
 plcHolder:boolean=false;
 
 message:any;

 public secPersonMessages:Array<any>=["Hi how I can help you?"];
 public Othermessage:Array<any>=["Hi Sara","I'm good what about you","ok thanks"];
 public rondomNum:number= setInterval(this.random(),1000);
 messages:Array<any>=[];
  constructor() { }

  ngOnInit() {
  }

/*rondom function*/
 random (){  Math.floor(Math.random()* 3)}
/*random function*/
/*send message func*/
sendMessage(){
this.messages.push(this.message);
 this.message="";

}
/*send message func*/




}
