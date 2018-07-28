import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';
import {moveInLeft,moveInRight,moveInDown,moveInUp,fadeIn} from '../../app-animation';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  animations:[moveInLeft(),moveInDown(),moveInUp(),fadeIn(),moveInRight()]
})
export class BootstrapComponent implements OnInit {
 
 public id;

  constructor(private Activate_router:ActivatedRoute,private _router:Router) { }

  ngOnInit() {

  	/**
    *
    * Get Id form Url
    */
  	this.Activate_router.params.subscribe((param:Params)=>{
  		let idPrm = parseInt(param['id']);
  		this.id=idPrm;
  	})
  }

}
