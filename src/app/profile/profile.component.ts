import { Component, OnInit ,ViewContainerRef} from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormBuilder,  FormGroup,Validators} from '@angular/forms';
import {  Input } from '@angular/core';

import {FormControl} from '@angular/forms';
import { ToastsManager,Toast } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title='toast';
  myControl1: FormControl = new FormControl();
  Control1: FormControl = new FormControl();
  Control2: FormControl = new FormControl();
  Control3: FormControl = new FormControl();
  user:any={};
  profId;
  options:any=[];
  option1:any=[];
  pic:String;
  lpic:String;
  ppic:String;
  dpic:String;
  show1:boolean=false;
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
      "Puducherry",
      "Sikkim",
      "Tamil Nadu",
      "Uttaranchal",
      "West Bengal"
    ];
  countries =[
    "Afghanistan",    
    "Albania"    ,
    "Algeria",    
    "Andorra",
    "Angola",
    "Antigua", 
    "Argentina"    ,
    "Armenia",
    "Australia"    ,
    "Austria",
    "Azerbaijan",    
    "Bahamas",
    "Bahrain",
    "Bangladesh",    
    "Barbados"    ,
    "Belarus",
    "Belgium",    
    "Belize",
    "Benin",    
    "Bhutan",
    "Bolivia", 
    "Bosnia", 
    "Botswana",    
    "Brazil",    
    "Brunei", 
    "Bulgaria",    
    "Burkina Faso",    
    "Burundi",    
    "Cabo Verde",
    "Cambodia",    
    "Cameroon",    
    "Central African",
    "Democratic", 
    "Denmark",    
    "Egypt",    
    "Ethiopia",    
    "Faroe Islands", 
    "France",    
    "Gabon",    
    "Georgia",    
    "Germany",    
    "Greece",    
    "Haiti",    
    "Iceland",    
    "India",    
    "Indonesia",    
    "Iran", 
    "Iraq",    
    "Ireland",    
    "Israel",    
    "Italy",    
    "Japan",
    "Kenya",    
    "Liberia",
    "Libya",    
    "Madagascar",    
    "Malaysia",    
    "Mexico",
    "Mongolia",    
    "Myanmar",    
    "Nepal",    
    "Netherlands",    
    "Nigeria",    
    "Niue",    
    "Norway",
    "Oman",    
    "Pakistan",    
    "United",
    "United States of America",    
    "Zambia",
    "Zimbabwe"
    ];
    relations = [
      {value: 'self', viewValue: 'self'},
      {value: 'spouse', viewValue: 'spouse'},
      {value: 'son', viewValue: 'son'},
      {value: 'daughter', viewValue: 'daughter'},
      {value: 'father', viewValue: 'Father'},
      {value: 'mother', viewValue: 'Mother'},
      {value: 'brother', viewValue: 'Brother'},
      {value: 'sister', viewValue: 'Sister'},
      {value: 'grandfather', viewValue: 'grandfather'},
      {value: 'grandmother', viewValue: 'grandmother'},
      {value: 'guardian', viewValue: 'guardian'},
      {value: 'others', viewValue: 'others'},
      
    ];
  filteredcities: Observable<string[]>;
  filteredstates: Observable<string[]>;
  filteredareas: Observable<string[]>;
  filteredcountries: Observable<string[]>;


    // For patient
  firstname="";
  lastname="";
  relationship="";
  photo="";
  address ="";
  city ="";
  state ="";
  country ="";
  mobile="";
  email="";
  bloodgroup="";
  pincode="";
  gender ="";
  dob="";
  insuranceprovidername="";
  policyholdername="";
  policyno="";
  policyissuancedate="";
  height="";
  weight="";
  allergic_to="";
  smoke="";
  tobacco="";
  alcohol="";
  myControl: FormControl = new FormControl();
  control: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  filteredOption1:  Observable<string[]>;
  User:any={};

  // for doctor
  dfirstname="";
  dlastname="";
  demail="";
  dphoto="";
  daadharnumber="";
  dmobile="";
  daltmobile="";
  daddress="";
  darea="";
  dcity="";
  dstate="";
  dcountry ="";
  dpincode="";
  deducationdetails="";
  dcertificateno="";
  dspecialization="";
  dspecialist="";
  ddutyschedule="";
  dtimeschedule="";
  dregistrationno="";
  dyearsofexperience="";
  public dprofiles:any[];
  doctor:any={};
  
// for lab
  
   lfirstname="";
   llastname="";
   lemail="";
   lphoto="";
   lphone="";
   lalternateno="";
   lbloodgroup="";
   ldob="";
   lgender ="";
   lmaritalstatus="";
   laddress ="";
   larea="";
   lcity ="";
   lstate ="";
   lcountry ="";
   lpincode="";
   leducationdetails="";
   lcertificateno="";
   lspecialist="";
   ldutyschedule="";
   ltimeschedule="";
   lregistrationno="";
   lyearsofexperience="";
   ltimeslot="";
   lab:any={};
 
 // for pharmacy
  pfirstname="";
  plastname="";
  pemail="";
  pphoto="";
  pmobile="";
  paddress="";
  parea="";
  pcity="";
  pstate="";
  pcountry ="";
  ppincode="";
  peducationdetails="";
  pspecialization="";
  pcertificateno="";
  pregistrationno="";
  pyearofexperience="";
  public profiles:any[];
  pharmacy:any={};
  
  
   
  constructor(private http:HttpClient, private auth: AuthService,public toastr: ToastsManager,
    vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.profId=this.auth.currentUser._id ;
   
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
     
      this.filteredOption1 = this.control.valueChanges
        .pipe(
          startWith(''),
          map(val => this.filter1(val))
        );
        this.filteredcities = this.myControl1.valueChanges
        .pipe(
          startWith(''),
          map(val => this.filter2(val))
        );
        this.filteredstates = this.Control1.valueChanges
        .pipe(
          startWith(''),
          map(val => this.filter3(val))
        );
        this.filteredareas = this.Control2.valueChanges
        .pipe(
          startWith(''),
          map(val => this.filter4(val))
        );
        this.filteredcountries = this.Control3.valueChanges
        .pipe(
          startWith(''),
          map(val => this.filter5(val))
        );
   
        this.auth.getProfile(this.profId)
        .subscribe(data => this.dprofiles = JSON.parse(JSON.stringify(data)) );

        
        this.auth.getDocid(this.profId)
        .subscribe(data => this.doctor = JSON.parse(JSON.stringify(data)) );
        this.auth.getPharid(this.profId)
        .subscribe(data => this.pharmacy = JSON.parse(JSON.stringify(data)) );
        this.auth.getLabid(this.profId)
        .subscribe(data => this.lab = JSON.parse(JSON.stringify(data)) );

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
    this.User.photo = btoa(binaryString);
    this.dpic = btoa(binaryString);
    this.doctor.dphoto = btoa(binaryString);
    this.ppic = btoa(binaryString);
    this.pharmacy.pphoto = btoa(binaryString);
    this.lpic = btoa(binaryString);
    this.lab.lphoto = btoa(binaryString);
  }


 
  
  call(){

    this.auth.saveData(this.profId,this.User).subscribe(()=>{
      console.log(this.User);
    });
  }
  callDoc(){

    this.auth.saveDocid(this.profId,this.doctor).subscribe(()=>{
      console.log(this.doctor);
    });
  }
  callPhar(){

    this.auth.savePharid(this.profId,this.pharmacy).subscribe(()=>{
      console.log(this.pharmacy);
    });
  }
  callLab(){

    this.auth.saveLabid(this.profId,this.lab).subscribe(()=>{
      console.log(this.lab);
    });
  }
  
  
 
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  filter1(val: string): string[] {
   return this.option1.filter(option =>
     option.toLowerCase().indexOf(val.toLowerCase()) === 0);
 }
 filter2(val: string): string[] {
  return this.cities.filter(option =>
    option.toLowerCase().indexOf(val.toLowerCase()) === 0);
}
filter3(val: string): string[] {
  return this.states.filter(option =>
    option.toLowerCase().indexOf(val.toLowerCase()) === 0);
}
filter4(val: string): string[] {
  return this.areas.filter(option =>
    option.toLowerCase().indexOf(val.toLowerCase()) === 0);
}
filter5(val: string): string[] {
  return this.countries.filter(option =>
    option.toLowerCase().indexOf(val.toLowerCase()) === 0);
}
 show(){
   this.show1=true;
 }
 showSuccess() {
  this.toastr.success('Profile added successfully');
 }
 showError() {
  this.toastr.error('This is not good!', 'Oops!',{dismiss: 'click',showCloseButton: true});
}

}
 
   