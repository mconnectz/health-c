import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
declare let jsPDF;

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.css']
})
export class ViewreportComponent implements OnInit {
  user:any={}
  profId;
  repos:any;
  constructor(private auth:AuthService,private router:ActivatedRoute) { }
    id = this.router.snapshot.params['id'];
    
  ngOnInit() {
    this.user = this.auth.currentUser;
    this.profId=this.auth.currentUser._id ;
    this.getData()
  }
  getData(){
    this.auth.repogetbyid(this.profId,this.id).subscribe(
      res=> {
        console.log(res)
        this.repos = res
 
      })
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
    doc.text(20, 20, 'Lab Report.');
    doc.save('Test.pdf');
    }


}
