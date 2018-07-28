import { Component, OnInit,
        trigger,
        animate,
        transition,
        state,
        keyframes,
        style  

 } from '@angular/core';
  import {Router} from "@angular/router";

  import  {ChartsComponent} from "../charts/charts.component";
  import   {moveIn,fadeIn,moveInLeft,moveInDown,moveInUp}          from "../../app-animation";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[moveIn(),fadeIn(),moveInLeft(),moveInDown(),moveInUp()],
  host: {'[@toggle]': '',"btn_option":''}
})
export class HomeComponent extends ChartsComponent implements OnInit {

  /*
  *
  *
  *Animation varaibles
  *
  *
  */

  state:string="off";
  chatToggle:boolean=false;
  modalState:string="off";

  // window resize
  windowWidth:any;
  public windowSize:boolean=false;
  message:any;
  // todo array
  public TodoArr:Array<any>=[];
  windowModalState:boolean=false;

  public secPersonMessages:Array<any>=["Hi, how I can help you?"];
  public Othermessage:Array<any>=["Hi Sara","I'm good what about you","ok thanks"];
  public rondomNum:number= setInterval(this.random(),1000);
  messages:Array<any>=[];


   constuctor(){
    
   }

   ngOnInit(){

    this.windowWidth=(window.screen.width);
    
    if(this.windowWidth < 768)
     this.windowSize=true;
   }

  moveMenu(){
  	this.state= (this.state==="off")?"on":"off";
  }
  toggleChat(){
    this.chatToggle=(this.chatToggle===true)?false:true;
  }

  // trigger modal function
  openModalRight(){
  this.modalState=(this.modalState==="off")?"on":"off";
  }
 

  // close modal
  close_Modal(){
    this.modalState=(this.modalState ==="on")?"off":"on";
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




  // Doughnut
  public doughnutChartLabels:string[] = ['Facebook', 'Twitter', 'Instagram','Youtube'];
  public doughnutChartData:number[] = [350, 450, 100,200];
  public doughnutChartType:string = 'doughnut';
 
private donutColors=[
{
backgroundColor: [
'#F97300',
'#3E5151',
'rgba(118, 183, 172, 1)',
'#AC0C0C',
'#A7D82E'
]
}
];  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  
  /*
  *
  * Todo Form
  *
  */
  addTodo(todo:any){
    let inputRe=todo;
  this.TodoArr.push(inputRe);
  console.log(this.TodoArr)
  }
  removeTodo(item){
    for (let i=0; i< this.TodoArr.length;i++){
     if(item===this.TodoArr[i]){
      this.TodoArr.splice(i,1);
     }
    }
   console.log(item)
  }
 
 /*Open Setting Modal*/
  openWindowSet(){
 this.windowModalState=(this.windowModalState===false)?true:false;
  }
}
