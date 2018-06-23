import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabComponent } from './lab/lab.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PharmComponent } from './pharm/pharm.component';
import {ProfileComponent} from './profile/profile.component'; 
import {ViewprofileComponent} from './viewprofile/viewprofile.component'; 
import {MyprofileComponent} from './myprofile/myprofile.component';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import { AuthGuardLogin } from './services/auth-login.service';
import { SuperAdmin } from './services/sadmin';
import { Pharmacy } from './services/Pharm.service';
import { Patient } from './services/Patient.service';
import { PharmacyAdmin } from './services/Padmin.service';
import { LabAdmin } from './services/Ladmin.service';
import { LabAssist } from './services/Labassist.service';
import { Lab } from './services/Lab.service';
import { Hospital } from './services/Hospital.service';
import { HospitalAdmin } from './services/Hadmin.service';
import { Doctor } from './services/Doctor.service';
import {HistoryComponent } from './history/history.component';
import {DiaviewComponent} from './diaview/diaview.component';
import { AdddrugComponent } from './adddrug/adddrug.component';
import { ViewdrugComponent } from './viewdrug/viewdrug.component';
import { DiaeditComponent } from './diaedit/diaedit.component';
import { DrugviewComponent } from './drugview/drugview.component';
import { EditdrugComponent } from './editdrug/editdrug.component';
import { LoginpatientComponent } from './loginpatient/loginpatient.component';
import { HomepatientComponent} from './homepatient/homepatient.component';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';
import { LoginlabadComponent} from './loginlabad/loginlabad.component';
import { LoginpharadComponent} from './loginpharad/loginpharad.component';
import {AddtestComponent} from './addtest/addtest.component';
import {ViewreportComponent} from './viewreport/viewreport.component';
import {ReportComponent} from './report/report.component';
import { EdittestComponent } from './edittest/edittest.component';


const route: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'homepatient',component: HomepatientComponent },
  { path: 'account',component: AccountComponent,canActivate: [AuthGuardLogin] },
  { path: 'dashboard',component:DashboardComponent,canActivate: [AuthGuardLogin]},
  { path: 'profile',component:ProfileComponent,canActivate: [AuthGuardLogin]},
  { path: 'myprofile',component:MyprofileComponent,canActivate: [AuthGuardLogin]},
  { path: 'history',component:HistoryComponent,canActivate: [AuthGuardLogin]},
  { path: 'diaview/:id',component:DiaviewComponent,canActivate: [AuthGuardLogin]},
  { path: 'diaedit/:id',component:DiaeditComponent,canActivate: [AuthGuardLogin]},
  { path: 'diagnosis',component:DiagnosisComponent,canActivate: [AuthGuardLogin]},
  { path: 'adddrug',component:AdddrugComponent,canActivate: [AuthGuardLogin]},
  { path: 'viewdrug',component:ViewdrugComponent,canActivate: [AuthGuardLogin]},
  { path: 'viewprofile/:id',component:ViewprofileComponent,canActivate: [AuthGuardLogin]},
  { path: 'editprofile/:id',component:EditprofileComponent,canActivate: [AuthGuardLogin]},
  { path: 'drugview/:id',component:DrugviewComponent,canActivate: [AuthGuardLogin]},
  { path: 'editdrug/:id',component:EditdrugComponent,canActivate: [AuthGuardLogin]},
  { path: 'addtest',component:AddtestComponent,canActivate: [AuthGuardLogin]},
  { path: 'viewreport/:id',component:ViewreportComponent,canActivate: [AuthGuardLogin]},
  { path: 'report',component:ReportComponent,canActivate: [AuthGuardLogin]},
  { path: 'edittest/:id',component:EdittestComponent,canActivate: [AuthGuardLogin]},

  { path: 'lab',component:LabComponent,canActivate: [SuperAdmin]},
  { path: 'pharmacy',component:PharmComponent,canActivate: [SuperAdmin]},
  { path: 'hospital',component:HospitalComponent,canActivate: [SuperAdmin]},
  { path: 'login',component: LoginComponent },
  { path: 'loginpatient',component: LoginpatientComponent },
  { path: 'logindoctor',component: LogindoctorComponent },
  { path: 'loginlabad',component: LoginlabadComponent },
  { path: 'loginpharad',component: LoginpharadComponent },
    
  { path: 'register',component: RegisterComponent }, 
  { path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})

export class RoutingModule { }
