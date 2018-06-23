import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup,FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-diaedit',
  templateUrl: './diaedit.component.html',
  styleUrls: ['./diaedit.component.css']
})
export class DiaeditComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  dosages = [
    'Beforefood',
    'Afterfood'
      ];
      tests=[
        'Glucose Fasting',
        'HbA1c Test',
        'Thyroid Function Test Total (TFT)',
         'Lipid Profile',
        'Liver Function Tests (LFT)',
        'Kidney Function Test (KFT)'
    ];
    filteredtests: Observable<string[]>;
    Control1: FormControl = new FormControl();
    myControl: FormControl = new FormControl();
    type = new FormControl();
    options = [
      'Aceclofenac',
       'Acetaminophen',
        'Asprin',
       'Chlorzoxazone'
    ];
    prescriptions:any;
    profId;
    user;
  
    filteredOptions: Observable<string[]>;
  constructor(private auth: AuthService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.profId=this.auth.currentUser._id ;
    this.filteredtests = this.Control1.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter2(val))
    
    );
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
    this.diagData();
  }
  filter2(val: string): string[] {
    return this.tests.filter(option =>
     option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  diagData(){
    this.auth.getDiagId(this.profId,this.id).subscribe(
      res=> {
        console.log(res)
        this.prescriptions = res
        console.log(this.prescriptions)
      
 
      }
    )
  }
  
  presedit(id,user){
    console.log(user)
    this.auth.presedit(this.profId,id,user)
    
        .subscribe(()=> this.goBack())
  }
  goBack(){
    this.router.navigate(['/history'])
  }

}
