import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable()

export class HospitalService {

 private url='http://localhost:3000';

 constructor(private http:HttpClient ) { }

 insert(data){
   return this.http.post(this.url+'/hospital',data)
 }

 get(){
   return this.http.get(this.url+'/hospitals')
 }

 remove(id){
     return this.http.delete(this.url+'/hospital/'+id,{responseType:'text'})
 }

 update(id,data){
     return this.http.put(this.url +'/hospital/'+id,data,{responseType:'text'})
 }

 search(data){
    return this.http.post(this.url +'/hospital/search', data )
 }


}