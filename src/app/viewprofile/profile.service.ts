import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ProfileService {

  private url='http://localhost:3000';

  constructor(private http: HttpClient) { }

  showProf(id){
    return this.http.get("http://localhost:3000/patient/"+id);
  
 }
 

}
