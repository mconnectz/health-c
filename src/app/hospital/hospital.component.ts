import { Component, OnInit } from '@angular/core';
import { HospitalService } from './hospital.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})

export class HospitalComponent implements OnInit {
  user:any={}

  users: any;

  query: String = '';

  Editing = false;

  addForm: FormGroup;
  name = new FormControl('', Validators.required);
  phone = new FormControl('', [Validators.required,this.validNumber('phone')]);

  constructor(private service: HospitalService,private fb: FormBuilder) { }
  
  ngOnInit(){
    this.get();
    this.addForm = this.fb.group({
      name: this.name,
      phone: this.phone
    });
  }

  validNumber(control){
    return control => {
      var regex = /^[0-9]{10}$/
      return regex.test(control.value) ? null : { invalid: true };
    }

  }

  get(){
    this.service.get().subscribe(
      res => this.users = res
    )
  }

  add(){
    this.service.insert(this.addForm.value).subscribe(
      res=>{
       this.users.push(res)
       console.log('Data inserted') 
       this.addForm.reset();
      }
    )
  }

  enableEditing(user) {
    this.Editing = true;
    this.user = user;
  }

  cancelEditing() {
    this.Editing = false;
    this.get();
  }

  edit(info) {
    let id = this.user._id
    console.log(id);
    this.service.update(id,info).subscribe(
      res => this.Editing = false,
      error => console.log(error)
    );
  }

  find(){
    this.service.search({search:this.query}).subscribe(
      res => { 
        this.users = res
      }
    )
  }

  delete(id){
    this.service.remove(id).subscribe(
      res =>{
         this.ngOnInit();
         console.log('Data deleted')
       })   
  }


}
