import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import{ ProfileService} from './profile.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  user:any={};
  pat;
  patient;
  addForm: FormGroup;
  pic:String;
  photo = new FormControl
  id = this.router.snapshot.params['id'];
  profId;
  constructor(private auth: AuthService, private router:ActivatedRoute, private service: ProfileService) { }

  ngOnInit() {
    this.getData();
    this.profId=this.auth.currentUser._id ;
  }
  getData(){
    this.auth.getProfId(this.profId,this.id).subscribe(
      res=> {
       
        this.pat = res
        console.log(this.pat)

      }
    );
   

  }

}
