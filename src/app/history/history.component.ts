import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {MatPaginator, MatTableDataSource,MatSort,MatSortable} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  user:any={}
  profId;

  displayedColumns = ['healthissue', 'patientname','date','actions'];
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
    this.user = this.auth.currentUser;
   
    this.profId=this.auth.currentUser._id ;

    //this.auth.getDocHis()
    //.subscribe(data => this.hprofiles = JSON.parse(JSON.stringify(data)) );
    this.auth.getDocHis(this.profId)
    .subscribe(data =>{
     this.hprofiles = JSON.parse(JSON.stringify(data))
     this.dataSource=new MatTableDataSource(this.hprofiles);
     this.dataSource.sort=this.sort;
     this.dataSource.paginator=this.paginator;
    }
     );


  }
  profdeletediag(id){
    this.auth.presdelete(this.profId,id).subscribe(
    res=> {
    console.log(res)
    this.hprofiles = res
    this.ngOnInit();
    }
    )
    }
  
  

}
