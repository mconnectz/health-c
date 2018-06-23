import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast';

@Component({
  selector: 'app-logindoctor',
  templateUrl: './logindoctor.component.html',
  styleUrls: ['./logindoctor.component.css']
})
export class LogindoctorComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  options = 'Doctor';

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  role = new FormControl('', [
    Validators.required
  ]);

  constructor(private fb: FormBuilder,
              private router: Router,
              public toast:ToastService,
              private auth:AuthService) {

  }

  ngOnInit() {
    if (this.auth.loggedIn) {
      this.router.navigate(['/dashboard']);
    }
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password,
      role:this.role
    });
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(
      res =>
      {
        this.toast.open('Welcome '+this.loginForm.get('username').value,'success');
        this.router.navigate(['/dashboard'])
      },
      error => this.toast.open('Invalid data', 'danger')
    );
  }

}