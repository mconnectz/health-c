import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-drugview',
  templateUrl: './drugview.component.html',
  styleUrls: ['./drugview.component.css']
})
export class DrugviewComponent implements OnInit {

  drug:any;
  profId;



  
  constructor(private service:AuthService,
              private router:ActivatedRoute,) { }
  
  id = this.router.snapshot.params['id']

  ngOnInit() {
    this.getData();
    this.profId=this.service.currentUser._id ;
  }

  getData(){
    this.service.medicinegetbyid(this.profId,this.id).subscribe(
      res=> {
        console.log(res)
        this.drug = res

      }
    )
  }

}
