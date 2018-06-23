import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'
import { ToastService } from '../services/toast';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;

  options = 'Patient';

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z_-\\s]*')
  ]);
  password = new FormControl('', [
    Validators.required,
   
  ]);
  role = new FormControl('', [
    Validators.required
  ]);
  email = new FormControl('', [Validators.required, Validators.email,]);

 getErrorMessage() {
   return this.email.hasError('required') ? 'You must enter a value' :
       this.email.hasError('email') ? 'Not a valid email' :
           '';
 }

  constructor(private fb: FormBuilder,
              private userService:UserService,
              public toast:ToastService,
              private router: Router) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password,
      role: this.role,
      email:this.email
    });
  }
  
  register() {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.toast.open('Thanks to Register', 'success');
        setTimeout(() => {
          console.log(res)
          this.router.navigate(['/loginpatient'])
        }, 1800);
      },
      error => this.toast.open('Registration Failed', 'danger')
    );
  }
}
