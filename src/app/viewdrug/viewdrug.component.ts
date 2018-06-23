import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatPaginator, MatTableDataSource,MatSort,MatSortable} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-viewdrug',
  templateUrl: './viewdrug.component.html',
  styleUrls: ['./viewdrug.component.css']
})
export class ViewdrugComponent implements OnInit {

  drug:any={}
  profId;

 displayedColumns = ['drugname','drugbrand','quantity','weight','stock','actions'];
 dataSource=  new MatTableDataSource(this.dataSource);

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 applyFilter(filterValue: string) {
   filterValue = filterValue.trim(); 
   filterValue = filterValue.toLowerCase(); 
   this.dataSource.filter = filterValue;
 }

 constructor(private auth: AuthService) { }
 public hprofiles:any=[];
 public hid:any=[];
 ngOnInit() {
   this.drug = this.auth.currentUser;
  
   this.profId=this.auth.currentUser._id ;

   //this.auth.getDocHis()
   //.subscribe(data => this.hprofiles = JSON.parse(JSON.stringify(data)) );
   this.auth.drugget(this.profId)
   .subscribe(data =>{
    this.hprofiles = JSON.parse(JSON.stringify(data))
    
     this.dataSource=new MatTableDataSource(this.hprofiles);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
   }
    );


 }
 
   profdelete(id){
     this.auth.medicinedelete(this.profId,id).subscribe(
     res=> {
     console.log(res)
     this.drug = res
     this.ngOnInit();
     }
     )
     }

}
