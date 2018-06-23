import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LabService {

 private url='http://localhost:3000';

 constructor(private http:HttpClient ) { }

 insert(data){
   
   return this.http.post(this.url+'/lab',data)
 }

 get(){
   return this.http.get(this.url+'/labs')
 }

 remove(id){
     return this.http.delete(this.url+'/lab/'+id,{responseType:'text'})
 }

 update(id,data){
     return this.http.put(this.url +'/lab/'+id,data,{responseType:'text'})
 }

 search(data){
    return this.http.post(this.url +'/lab/search', data )
 }


}