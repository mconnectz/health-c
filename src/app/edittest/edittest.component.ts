import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable  } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastsManager,Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-edittest',
  templateUrl: './edittest.component.html',
  styleUrls: ['./edittest.component.css']
})
export class EdittestComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  title='toast';
  report:any={}
    profId;
  constructor(private auth:AuthService,private http:HttpClient,public toastr: ToastsManager,
    vcr: ViewContainerRef,private route:ActivatedRoute,
    private router:Router) { 
      this.toastr.setRootViewContainerRef(vcr);
     }
     showSuccess() {
      this.toastr.success('Updated successfully');
     }
     showError() {
      this.toastr.error('Something went wrong');
    }


  patientname="";
  prescribeddoctor="";
  dateoftest="";
  typeoftest="";
  Repo:any={"patientId":"","prescribeddoctorId":"","dateoftest":"","typeoftest":""};
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
    this.report = this.auth.currentUser;
    this.profId=this.auth.currentUser._id ;
   this.get();

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
get(){
  this.auth.repogetbyid(this.profId,this.id).subscribe(
    res=>{
      console.log(res)
      this.report=res
      console.log(this.report)
    }
  )
}

   edit(data){
     console.log(data)
     this.auth.repoedit(this.profId,this.id,data)
     .subscribe(()=>this.goBack())
   }
goBack(){
  this.router.navigate(['/viewreport'])
}
}
