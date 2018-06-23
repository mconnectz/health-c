import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  })
export class HomeComponent implements OnInit {

  start: boolean = false
  constructor(private auth: AuthService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit () {
    setTimeout(() => this.start = true, 200)
  }
  show(){
    this.router.navigate(['/homepatient'])
  }
 

}
