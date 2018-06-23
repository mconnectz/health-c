import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-editdrug',
  templateUrl: './editdrug.component.html',
  styleUrls: ['./editdrug.component.css']
})
export class EditdrugComponent implements OnInit {
  drug:any={};
  id = this.route.snapshot.params['id'];
  profId;
  constructor(private auth: AuthService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.drug = this.auth.currentUser;
    this.profId=this.auth.currentUser._id ;
    this.getData();
  }
  getData(){
    this.auth.medicinegetbyid(this.profId,this.id).subscribe(
      res=> {
        console.log(res)
        this.drug = res

      }
    )
  }
  
  editmedicine(id,user){
    console.log(user)
    this.auth.editmedicine(this.profId,id,user)
    
        .subscribe(()=> this.goBack())
  }
  goBack(){
    this.router.navigate(['/viewdrug'])
  }
}

