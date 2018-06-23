import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';

import { JwtHelperService } from '@auth0/angular-jwt';

import { UserService } from './user.service';
import { User } from './user.model';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  getoken;
  loggedIn = false;
  isSadmin = false;

  isHadmin = false;
  isPadmin = false;
  isLadmin = false;
  isDoctor = false;
  isHospital = false;
  isLab = false;
  isPharm = false;
  isLabAssist = false;
  isPatient = false;

  currentUser: User = new User();

  constructor(private userService: UserService,
              private router: Router,
              private jwtHelper: JwtHelperService,
              private http: Http
            ) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  getToken(){
    return this.getoken = localStorage.getItem('token');
  }

  login(usernameAndPassword) {
    return this.userService.login(usernameAndPassword).map(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isSadmin = false;
    this.isHadmin = false;
    this.isPadmin = false;
    this.isLadmin = false;
    this.isDoctor = false;
    this.isHospital = false;
    this.isLab= false;
    this.isPharm = false;
    this.isLabAssist = false;
    this.isPatient = false;
    this.currentUser = new User();
    this.router.navigate(['/home']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser) {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.username = decodedUser.username;
    this.currentUser.role = decodedUser.role;
    decodedUser.role === 'Doctor' ? this.isDoctor = true : this.isDoctor = false;
    decodedUser.role === 'Hadmin' ? this.isHadmin = true : this.isHadmin = false;
    decodedUser.role === 'Hospital' ? this.isHospital = true : this.isHospital = false;
    decodedUser.role === 'Lab' ? this.isLab = true : this.isLab = false;
    decodedUser.role === 'LabAssist' ? this.isLabAssist = true : this.isLabAssist = false;
    decodedUser.role === 'Ladmin' ? this.isLadmin = true : this.isLadmin = false;
    decodedUser.role === 'Padmin' ? this.isPadmin = true : this.isPadmin = false;
    decodedUser.role === 'Patient' ? this.isPatient = true : this.isPatient = false;
    decodedUser.role === 'Pharm' ? this.isPharm = true : this.isPharm = false;  
    decodedUser.role === 'Sadmin' ? this.isSadmin = true : this.isSadmin = false;
    delete decodedUser.role;
  }
  saveData(id,prof) {
    return this.http.post("http://localhost:3000/patient/"+id+"/profiles", prof).map(res => res.json());
  }
  getProfile(id){

    return this.http.get("http://localhost:3000/patient/"+id+"/profiles").map(res => res.json());
  }

  getProfId(id1,id2){
    return this.http.get("http://localhost:3000/patient/"+id1+"/profiles/"+id2).map(res => res.json());
  }
  profEdit(id1,id2,data){
    return this.http.put("http://localhost:3000/patient/"+id1+"/profiles/"+id2,data);
  }
  profdelete(id1,id2){
    return this.http.delete("http://localhost:3000/patient/"+id1+"/profiles/"+id2);
  }
    showProf(id){
      return this.http.get("http://localhost:3000/patient/"+id).map(res => res.json());
    
  }
  
  getPhar(){
    return this.http.get("http://localhost:3000/admin/pharm").map(res => res.json());
  }
  getPharid(id){
    return this.http.get("http://localhost:3000/admin/pharm/"+id).map(res => res.json());
  }
  savePhar(doc){
    return this.http.post("http://localhost:3000/admin/pharm", doc).map(res => res.json());
  }
  savePharid(id,doc){
    return this.http.put("http://localhost:3000/admin/pharm/"+id, doc);
  }
  getDoc(){
    return this.http.get("http://localhost:3000/doctor").map(res => res.json());
  }
  getDocid(id){
    return this.http.get("http://localhost:3000/doctor/"+id).map(res => res.json());
  }
  saveDoc(doc){
    return this.http.post("http://localhost:3000/doctor", doc).map(res => res.json());
  }
  saveDocid(id,doc){
    return this.http.put("http://localhost:3000/doctor/"+id, doc);
  }
  getLab(){
    return this.http.get("http://localhost:3000/admin/lab").map(res => res.json());
  }
  getLabid(id){
    return this.http.get("http://localhost:3000/admin/lab/"+id).map(res => res.json());
  }
  saveLab(doc){
    return this.http.post("http://localhost:3000/admin/lab",doc).map(res => res.json());
  }
  saveLabid(id,doc){
    return this.http.put("http://localhost:3000/admin/lab/"+id,doc);
  }
  saveDiag(id1,id2,user){
    return this.http.post("http://localhost:3000/doctor/"+id1+"/patient/"+id2+"/prescription/",user);
    
    }
    getPro(id){
      return this.http.get("http://localhost:3000/doctor/"+id+"/patient").map(res => res.json());
    }
    profilecount(id){
      return this.http.get("http://localhost:3000/patient/"+id+"/profiles/count").map(res => res.json());
    }
    pharmcount(){
      return this.http.get("http://localhost:3000/prescriptions/count").map(res => res.json());
    }
    patcount(){
      return this.http.get("http://localhost:3000/patient/count").map(res => res.json());
    }
    getDiag(){
      return this.http.get("http://localhost:3000/doctor/prescription").map(res => res.json());
    }
    getDocHis(id){
      return this.http.get("http://localhost:3000/doctor/"+id+"/prescription").map(res => res.json());
    }
    getDiagId(id1,id2){
      return this.http.get("http://localhost:3000/doctor/"+id1+"/prescription/"+id2).map(res => res.json());
    }
      
      diagfdelete(id){
        return this.http.delete("http://localhost:3000/doctors/prescriptions/"+id);
        }
        search(data){
          return this.http.post("http://localhost:3000/doctors/prescriptions/search", data )
          }
    postdocpatid(data){
      return this.http.post("http://localhost:3000/doctors/diagnose", data )
    }

    presedit(id,id2,doc){
      return this.http.put("http://localhost:3000/doctor/"+id+"/prescription/"+id2,doc);
    }
    
    presdelete(id,id2){
      return this.http.delete("http://localhost:3000/doctor/"+id+"/prescription/"+id2);
    }

   getpatdiaid(id){
    return this.http.get("http://localhost:3000/patient/"+id+"/prescription").map(res => res.json());
   }
   getpharmid(id){
    return this.http.get("http://localhost:3000/patients/"+id+"/padmin").map(res => res.json());
   }
   drug(id,prof) {
    return this.http.post("http://localhost:3000/admin/pharm/"+id+"/medicine", prof).map(res => res.json());
  }
  drugget(id){
    return this.http.get("http://localhost:3000/admin/pharm/"+id+"/medicine").map(res => res.json());
  }
  medicinedelete(id1,id2){
    return this.http.delete("http://localhost:3000/admin/pharm/"+id1+"/medicine/"+id2);
    }
  editmedicine(id1,id2,doc){
      return this.http.put("http://localhost:3000/admin/pharm/"+id1+"/medicine/"+id2,doc);
    }
  medicinegetbyid(id1,id2){
    return this.http.get("http://localhost:3000/admin/pharm/"+id1+"/medicine/"+id2).map(res => res.json());
  }
  report(id,data){
    return this.http.post("http://localhost:3000/admin/lab/"+id+"/labreport",data).map(res => res.json());
  }
 
 patgetid(id){
   return this.http.get("http://localhost:3000/admin/lab/"+id+"/labreport").map(res => res.json());
 }

repodel(id1,id2){
  return this.http.delete("http://localhost:3000/admin/lab/"+id1+"/labreport/"+id2);
}
repoedit(id1,id2,data){
return this.http.put("http://localhost:3000/admin/lab/"+id1+"/labreport/"+id2,data);
}
repogetbyid(id1,id2){
  return this.http.get("http://localhost:3000/admin/lab/"+id1+"/labreport/"+id2).map(res => res.json());
}
}
