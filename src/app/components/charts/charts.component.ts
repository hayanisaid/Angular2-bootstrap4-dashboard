import { Component, OnInit } from '@angular/core';
 import {moveInLeft} from "../../app-animation";
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  animations:[moveInLeft()]
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   /*bar charts*/
 public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
    // Replace with your data
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
   // Replace with your data
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
   public barChartColors:Array<any> = [
    { // grey
      backgroundColor: '#cecece',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#f8f8f8',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: '#F97300',
      borderColor: '#F97300',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  

  /*Start  Doughnut*/

   // Replace with your data
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 public doughnutColors:Array<any>=[
 { // dark grey
      backgroundColor: '#F97300',
      borderColor: '#F97300',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }];

  // events
  public DoughnutCliked(e:any):void {
    console.log(e);
  }
 
  public DoughnutHovered(e:any):void {
    console.log(e);
  }
   /*End Doughnut Chart*/


   // Radar chart

    // Replace with your data
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    // Replace with your data
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';
   
   public rardarColor :Array<any> =[
  { // dark grey
      backgroundColor: 'rgba(249, 115, 0, 0.7)',
      borderColor: '#F97300',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }

   ];
  // events
  public RadarchartClicked(e:any):void {
    console.log(e);
  }
 
  public RadarchartHovered(e:any):void {
    console.log(e);
  }

/*line chart*/
  public lineChartData:Array<any> = [
    // Replace with your data
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';

  // You can change background and color to your favorite color
   public lineChartColors:Array<any> = [
     { // grey
      
      borderColor: '#F97300',
      pointBackgroundColor: '#ac0c0c',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor:"#F97300",
      borderColor: '#fff',
      pointBackgroundColor: '#ac0c0c',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      
      borderColor: '#10828C',
      pointBackgroundColor: '#ac0c0c',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
   ];
 
 
 




} //end charComponent class
