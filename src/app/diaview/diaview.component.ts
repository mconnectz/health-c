import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-diaview',
  templateUrl: './diaview.component.html',
  styleUrls: ['./diaview.component.css']
})
export class DiaviewComponent implements OnInit {

  public profiles:any[];
  user:any;
  prescriptions:any[];
  profId;
  docId;
  p;
  constructor(private service:AuthService,
    private router:ActivatedRoute,) { }
 
    id = this.router.snapshot.params['id']
  
  ngOnInit()
  {
    this.user = this.service.currentUser;
    this.profId=this.service.currentUser._id ;
 this.diagData();

  }
  diagData(){
    this.service.getDiagId(this.profId,this.id).subscribe(
      res=> {
        console.log(res)
        this.prescriptions = res
        console.log(this.prescriptions)
      
 
      }
    )
  }
  
  
  
  profdelete(id){
  this.service.profdelete(this.profId,id).subscribe(
  res=> {
  console.log(res)
  this.user = res
  this.ngOnInit();
  }
  )
  }
}
