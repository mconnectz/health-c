import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 user:any={}
 public pharmcounts:any={};
 pat:any={};
 profile={};
 profId;
 constructor(private auth: AuthService) { }

 ngOnInit() {
   this.user = this.auth.currentUser;
   this.profId=this.auth.currentUser._id ;
   this.getcount();
   this.getpatcount();
   this.procount();

 }

 procount(){
   this.auth.profilecount( this.profId).subscribe(
     res=> {
       console.log(res)
       this.profile = res
       console.log(this.profile)

     }
   )}
 getcount(){
   this.auth.pharmcount().subscribe(
     res=> {
       console.log(res)
       this.pharmcounts = res
       console.log(this.pharmcounts)

     }
   )}

 getpatcount(){
   this.auth.patcount().subscribe(
     res=> {
       console.log(res)
       this.pat = res
       console.log(this.pat)

     }
   )}



}