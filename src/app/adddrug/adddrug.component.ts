import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import {FormBuilder,  FormGroup,Validators} from '@angular/forms';
import {  Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-adddrug',
  templateUrl: './adddrug.component.html',
  styleUrls: ['./adddrug.component.css']
})
export class AdddrugComponent implements OnInit {
  
  drugname="";
  drugbrand="";
  quantity="";
  Weight="";
  stock="";
  user:any={};
  User:any={};
  profId;

  drug :any={"drugname":"","drugbrand":"","quantity":"","weight":"","stock":""}
  constructor(private http:HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.profId=this.auth.currentUser._id ;
 
  }


  calldrug(){

    this.auth.drug(this.profId,this.drug).subscribe(()=>{
      console.log(this.drug);
    });
  }
}
