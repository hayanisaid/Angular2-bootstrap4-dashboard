import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
// import animation
import {moveInUp,moveInLeft,moveInRight,moveInDown,notifyLeft}   from '../../app-animation';

/*
*
*import Image upload Module
*
**/
import { ImageUploadModule } from "angular2-image-upload";
import { CKEditorModule } from 'ng2-ckeditor';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  animations:[moveInUp(),moveInLeft(),moveInDown(),moveInRight(),notifyLeft()]
})
export class FormsComponent implements OnInit {
public formId;

  constructor(private _ActivateRoute:ActivatedRoute,private _router:Router) {
   
    }

  ngOnInit() {

  	this._ActivateRoute.params.subscribe((param:Params)=>{
  		let id= parseInt(param['id']);
  		this.formId=id;
  	})
  }




  


}
