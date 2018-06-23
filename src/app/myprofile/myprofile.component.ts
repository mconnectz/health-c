import { Component, OnInit,ViewChild} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource,MatSort,MatSortable} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
 
  user:any={}
  profId;

  public pprofiles:any={};
  public dprofiles:any={};
  public labprofiles:any={};
  public pharprofiles:any={};
  patient:any={};

  displayedColumns = ['firstname', 'relationship','gender','actions'];
  dataSource=  new MatTableDataSource(this.dataSource);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  constructor(private auth: AuthService,  private route: Router
) {} 



  ngOnInit() {
    this.profId=this.auth.currentUser._id ;
    console.log(this.profId)
    this.user = this.auth.currentUser;
    console.log(this.user.role);
   // this.auth.getProfile(this.profId)
   // .subscribe(data => this.pprofiles = JSON.parse(JSON.stringify(data)) );

   this.auth.getProfile(this.profId)
    .subscribe(data => {
        this.pprofiles = JSON.parse(JSON.stringify(data))
        this.dataSource=new MatTableDataSource(this.pprofiles);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
    }
       );
    this.auth.getDocid(this.profId)
    .subscribe(data => this.dprofiles = JSON.parse(JSON.stringify(data)) );
  
    this.auth.getPharid(this.profId)
    .subscribe(data => this.pharprofiles = JSON.parse(JSON.stringify(data)) );
    this.getData();
  }
  
  profdelete(id){
    this.auth.profdelete(this.profId,id).subscribe(
      res=> {
        console.log(res)
        this.patient = res
        this.ngOnInit();
      }
    )
  }
  getData(){
    this.auth.getLabid(this.profId).subscribe(
      res=> {
        console.log(res)
        this.labprofiles = res
        console.log(this.labprofiles)
 
      }
    )
  }

}
