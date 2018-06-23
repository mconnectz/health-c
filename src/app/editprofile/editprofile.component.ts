import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup,FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  myControl: FormControl = new FormControl();
  Control: FormControl = new FormControl();
  Control1: FormControl = new FormControl();
areas=[
  "Annanagar",
  "Ambattur",
  "Avadi",
  "Mogappair",
  "Mylopore",
  "Vadapalani",
  "Tambaram",
  "Koyembedu"
]
  cities = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Vellore",
     "Thanjavur",
     "Kanchipuram"
  ];
  states =[
    "Andra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Punjab",
    "Puducherry",
    "Sikkim",
    "Tamil Nadu",
    "Uttaranchal",
    "West Bengal"
  ];



  user:any={};
  id = this.route.snapshot.params['id'];
  patient:any=[];
  profId;
  constructor(private auth: AuthService, 
    private route:ActivatedRoute,
    private router:Router) { }
    filteredcities: Observable<string[]>;
    filteredstates: Observable<string[]>;
    filteredsareas: Observable<string[]>;
  ngOnInit() {
    this.filteredcities = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
    this.filteredstates = this.Control.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter1(val))
    );
    this.filteredsareas = this.Control1.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter2(val))
    );
    this.user = this.auth.currentUser;
    this.profId=this.auth.currentUser._id ;
    this.getData();
  }
  
  getData(){
    this.auth.getProfId(this.profId,this.id).subscribe(
      res=> {
        console.log(res)
        this.patient = res

      }
    )
  }

  profedit(id,user){
    console.log(user)
    this.auth.profEdit(this.profId,id,user)
    
        .subscribe(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/myprofile'])
  }
  
  filter(val: string): string[] {
    return this.cities.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  filter1(val: string): string[] {
    return this.states.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  filter2(val: string): string[] {
    return this.areas.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
