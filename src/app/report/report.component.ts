import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource,MatSort,MatSortable } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
   profiles:any;
    user:any={}
    profId;
    query;
  

  displayedColumns = ['patientId','doctorId', 'dateoftest','typeoftest','actions'];
  dataSource=new MatTableDataSource(this.dataSource);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
 
  constructor(private auth: AuthService,private route: Router) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
   this.profId=this.auth.currentUser._id ;
   this.auth.patgetid(this.profId)
   .subscribe(data=>{
     this.profiles=JSON.parse(JSON.stringify(data))
     this.dataSource=new MatTableDataSource(this.profiles);
          this.dataSource.sort=this.sort;
          this.dataSource.paginator=this.paginator;
   });
    
  }





  deleterepo(id){
     this.auth.repodel(this.profId,id).subscribe(
     res=>{
       console.log(res)
     this.profiles=res
     this.ngOnInit();
     })
 }
 
   
    
}
