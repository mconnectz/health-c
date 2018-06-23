import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable  } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastsManager,Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
  title='toast';
  user:any={}
  pic:String;
  User:any={}
  profId;
  constructor(private auth:AuthService,private http:HttpClient,public toastr: ToastsManager,
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
     }
     showSuccess() {
      this.toastr.success('Test Details added successfully');
     }
     showError() {
      this.toastr.error('Something went wrong', 'Sorry!',{dismiss: 'click',showCloseButton: true});
    }


  patientname="";
  prescribeddoctor="";
  dateoftest="";
  typeoftest="";
  Repo:any={};
  myControl: FormControl = new FormControl();

  tests=[
    'Glucose Fasting',
    'HbA1c Test',
    'Thyroid Function Test Total (TFT)',
     'Lipid Profile',
    'Liver Function Tests (LFT)',
    'Kidney Function Test (KFT)'
   ];
 
   filteredTests: Observable<string[]>;

   ngOnInit() {

    this.user = this.auth.currentUser;
    this.profId=this.auth.currentUser._id ;
     this.filteredTests = this.myControl.valueChanges
       .pipe(
         startWith(''),
         map(val => this.filter(val))
       );
   }
 
   filter(val: string): string[] {
     return this.tests.filter(test =>
       test.toLowerCase().includes(val.toLowerCase()));
   }
   call(){
       this.auth.report(this.profId,this.Repo).subscribe(()=>{
       console.log(this.Repo);
     });
   }
   handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.pic = btoa(binaryString);
    this.User.report = btoa(binaryString);
 
  }
}
