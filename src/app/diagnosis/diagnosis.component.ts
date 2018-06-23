
import { AuthService } from '../services/auth.service';
import {Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup,FormBuilder} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { Component,OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort,MatSortable} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
declare let jsPDF;


@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  userr:any={}
  public prescriptions:any[];
  public datas:any[];
  users:any;
  public pprofiles:any[];
  public dprofiles:any=[];
  public pharmid:any=[];
  types = new FormControl();
  id2 = new FormControl();

  type = [ 'Glucose Fasting',
  'HbA1c Test',
  'Thyroid Function Test Total (TFT)',
   'Lipid Profile',
  'Liver Function Tests (LFT)',
  'Kidney Function Test (KFT)'];
    myform: FormGroup;
    period = new FormControl();
    events: string []= [];
    health: string []= [];
    diagonis: string []= [];
    other: string []= [];
    frequent: string []= [];
    command: string []= [];
    testies: string []= [];
    pharma: string []= [];
    labar: string []= [];
    medi: string []= [];
    mor: string []= [];
    aft: string []= [];
    docObj:object[]=[];
   
   periods = ['Morning', 'AfterNoon', 'Night'];
     
  public locations:any=[];
   user:any=[];
   ids:any=[];
   user1:any=[];
   user2:any=[];
   patient:any={};
   doctor:any={};
     drugs :any = [{"healthissue":"","diagnosisreport":"","otherremark":"","frequency":"","comments":"","test":"","pharmacie":"","lab":"","dosage":"","medicine":"","patientname":""}];
     drugs1 :any = [{"healthissue":"","diagnosisreport":"","otherremark":"","frequency":"","comments":"","test":"","pharmacie":"","lab":"","dosage":"","medicine":"","patientname":"" }];
  
    medicine='';
    opt='';
    duration='';
    value='';
    value1='';
    value2='';
    value3='';
    healthissue='';
    diagnosisreport='';
    otherremark='';
    beforefoods='';
    afterfood='';
    frequency='';
    comments='';
    pharmacie='';
    test='';
    lab='';
    dosage1='';
    patientname='';
    doc_id='';
    pat_id='';
    details:string[]=[];
  
   
    medicines = [
      'Aceclofenac',
       'Acetaminophen',
        'Asprin',
       'Chlorzoxazone',
       'Aceclofenac',
       'Acetaminophen',
        'Asprin',
       'Chlorzoxazone',
       'Aceclofenac',
       'Acetaminophen',
        'Asprin',
       'Chlorzoxazone'
    ];
    option;
   dosage = [
    '1 tablet',
    '1/2 tablet',
    '5ml',
    '10ml',
    '15ml',
    '20ml',
    '25ml',
   ];
    filteredmedicines: Observable<string[]>;
    filtereddosage:     Observable<string[]>;
    myControl: FormControl = new FormControl();
    Control: FormControl = new FormControl();
    Control1: FormControl = new FormControl();
    Control2: FormControl = new FormControl();
    
   
    pharmacies=[
         'Annanagar',
         'Ambattur',
        'Avadi',
         'Mogappair',
         'Mylopore',
         'Vadapalani',
         'Tambaram',
         'Koyembedu'
    ];
    tests=[
        'Glucose Fasting',
        'HbA1c Test',
        'Thyroid Function Test Total (TFT)',
         'Lipid Profile',
        'Liver Function Tests (LFT)',
        'Kidney Function Test (KFT)'
    ];
  labs=[
    'Medall Diagnostics',
    'Emhealth.in',
    'A P Diagnostic Centre',
    'Lister Metropolis Laboratory',
    'Bio Surya Lab'
  
  ];
  query;
  profId;
  patid;
  docid;
  dosages = [
    'Beforefood',
    'Afterfood'
      ];
  
  public patients:any[];
   
    filteredpharmacies: Observable<string[]>;
    filteredtests: Observable<string[]>;
    filteredlabs: Observable<string[]>;
    show:boolean=true;

    displayedColumns = ['doctors', 'patientname','date','healthissue','actions'];
    dataSource=  new MatTableDataSource(this.dataSource);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); 
      filterValue = filterValue.toLowerCase(); 
      this.dataSource.filter = filterValue;
    }
  constructor(private auth: AuthService, private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {                                
    this.userr = this.auth.currentUser;
    this.profId=this.auth.currentUser._id ;
    this.auth.getPro(this.profId)
    .subscribe(data => this.pprofiles = JSON.parse(JSON.stringify(data)) 
  );

  this.auth.getpharmid(this.profId)
  .subscribe(data => this.pharmid = JSON.parse(JSON.stringify(data)) 
);

   this.auth.getDocid(this.profId)
     .subscribe(data => this.doctor = JSON.parse(JSON.stringify(data))
   );
  // let docObj =  {
  //   Id: this.doctor._id,
  //   username: this.doctor.username,
  //   speciality: this.doctor.dspecialist
    
  //   }
  //   console.log(docObj)
    
  //   this.auth.getDocid(this.profId)
  //   .subscribe(data => 
  //   { 
  //     this.doctor = JSON.parse(JSON.stringify(data) ,

  //    let docObj = {
  //    Id: this.doctor._id,
  //   username: this.doctor.username,
  //   speciality: this.doctor.dspecialist
  //   }
  //   )
  // }
  //   );
 


  //this.auth.getpatdiaid(this.profId)
  //.subscribe(data => 
    //this.dprofiles = JSON.parse(JSON.stringify(data)) );
    //console.log(this.dprofiles);
 
    this.auth.getpatdiaid(this.profId)
    .subscribe(data => {
        this.dprofiles = JSON.parse(JSON.stringify(data))
        this.dataSource=new MatTableDataSource(this.dprofiles);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
        console.log(this.dprofiles)
       
    }
       );
    console.log(this.dprofiles);
   
      this.filteredmedicines = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      
      );
    
    this.filteredpharmacies = this.Control.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter1(val))
    
    );
    this.filteredtests = this.Control1.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter2(val))
    
    );
    this.filteredlabs = this.Control2.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter3(val))
    
    );
   }

    
  getPatient(){
    this.auth.showProf(this.id2).subscribe(
      res=> {
        console.log(res)
        this.patient = res

      }
    )
   
  }

   filter(val: string): string[] {
    return this.medicines.filter(option =>
     option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  pharmshow(){
    this.show=false;
  }
  filter1(val: string): string[] {
    return this.pharmacies.filter(option =>
     option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  filter2(val: string): string[] {
    return this.tests.filter(option =>
     option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  filter3(val: string): string[] {
    return this.labs.filter(option =>
     option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  add(id1,id2){
    this.drugs.medicine = this.medicine;
    this.drugs.healthissue=this.healthissue;
    this.drugs.diagnosisreport = this.diagnosisreport;
    this.drugs.otherremark = this.otherremark;
    this.drugs.test = this.test;
    this.drugs.dosage=this.dosage1;
    this.drugs.frequency=this.frequency;
    this.drugs.comments=this.comments;
    this.drugs.pharmacie=this.pharmacie;
    this.drugs.lab=this.lab;
    this.drugs.patientname=this.patientname;
    this.clear();
    this.display();
    this.patid=this.id2;
 
    this.call(id1,id2);
    console.log(this.user);
    this.postid();
  
  }
  profdelete(id){
    this.auth.diagfdelete(id).subscribe(
    res=> {
    console.log(res)
    this.locations = res
    this.ngOnInit();
    }
    )
    }
  clear(){
    this.drugs1.medicine = this.drugs.medicine;
    this.drugs1.healthissue=  this.drugs.healthissue;
    this.drugs1.diagnosisreport = this.drugs.diagnosisreport;
    this.drugs1.otherremark =this.drugs.otherremark;
    this.drugs1.test = this.drugs.test;
    this.drugs1.dosage=this.drugs.dosage;
   
    this.drugs1.frequency= this.drugs.frequency;
    this.drugs1.comments= this.drugs.comments;
    this.drugs1.pharmacie= this.drugs.pharmacie;
    this.drugs1.lab= this.drugs.lab;
    this.drugs1.patientname= this.drugs.patientname;
    
  }
  reset(){
    this.medicine='';
   
 
    this.dosage1='';
    this.frequency='';
    this.afterfood='';

   

    
  }
  call(id1,id2){
    
    this.user = { "medicine": this.medi, "healthissue": this.health, "diagnosisreport":this.diagonis, "otherremark": this.other, "dosage":  this.mor, "afterfood":this.aft, "frequency":this.frequent, "comments":  this.command, "pharmacie": this.pharma, "test":  this.testies, "lab": this.labar,"patientname": this.patientname};
   
    this.auth.saveDiag(id1,id2,this.user).subscribe((res)=>{
      console.log(res)
    });
  }
  display() {
   
  
    this.events.push(` ${this.drugs1.healthissue} ${this.drugs1.diagnosisreport} ${this.drugs1.otherremark} ${this.drugs1.medicine}  ${this.drugs1.beforefoods} ${this.drugs1.afterfood} ${this.drugs1.frequency}  ${this.drugs1.comments} ${this.drugs1.pharmacie} ${this.drugs1.test} ${this.drugs1.lab}`);
    this.health.push(` ${this.drugs1.healthissue}`);
    this.diagonis.push(`${this.drugs1.diagnosisreport}`);
    this.other.push(`${this.drugs1.otherremark}`);
    this.frequent.push(`${this.drugs1.frequency}`);
    this.command.push(`${this.drugs1.comments}`);
    this.testies.push(`${this.drugs1.test}`);
    this.pharma.push(` ${this.drugs1.pharmacie}`);
    this.labar.push(`${this.drugs1.lab}`);
    this.medi.push(`${this.drugs1.medicine}`);
    this.mor.push(`${this.drugs1.dosage}`);
    this.aft.push(`${this.drugs1.afterfood}`);
  
    this.user1.push({healthissue:this.health, medicine: this.medi, diagnosisreport:this.diagonis, otherremark: this.other, dosage:  this.mor, afterfood:this.aft, frequency:this.frequent, comments:  this.command, pharmacie: this.pharma, test:  this.testies, lab: this.labar});
    this.user2.push({healthissue:this.health, diagnosisreport:this.diagonis, otherremark: this.other,comments:  this.command});
    console.log(this.medi);
     }
     find(){
      this.auth.search({search:this.query}).subscribe(
      res => { 
      this.dprofiles = res
      }
      )
      }
      profdeletediag(id){
        this.auth.diagfdelete(id).subscribe(
        res=> {
        console.log(res)
        this.dprofiles = res
        this.ngOnInit();
        }
        )
        }
        postid(){
          this.ids = { "doc_id": this.profId, "pat_id": this.patid };
   console.log(this.profId)
   console.log(this.patid)
    this.auth.postdocpatid(this.ids).subscribe((res)=>{
      console.log(res)
      console.log(this.ids)
    });
        }

        convert(p){
  
          var doc = new jsPDF();
          var col = ["Details", "Values"];
          var rows = [];
          for(var key in p){
              var temp = [key, p[key]];
              rows.push(temp);
          }
          doc.autoTable(col, rows);
          doc.text(20, 20, 'Prescription');
          doc.save('Prescription.pdf');
          }

  }
