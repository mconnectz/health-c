import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../assets/material/material.module';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing';

import { HomeComponent } from './home/home.component';

import { TypingAnimationDirective } from 'angular-typing-animation';
import { ToastService } from './services/toast';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-login.service';
import { AccountComponent } from './account/account.component';
import { LabComponent } from './lab/lab.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PharmComponent } from './pharm/pharm.component';

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
import { ProfileService } from './viewprofile/profile.service';

import { LabService } from './lab/lab.service';
import { HospitalService } from './hospital/hospital.service';
import { ProfileComponent } from './profile/profile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { HistoryComponent } from './history/history.component';
import { DiaviewComponent } from './diaview/diaview.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AdddrugComponent } from './adddrug/adddrug.component';
import { ViewdrugComponent } from './viewdrug/viewdrug.component';
import { DiaeditComponent } from './diaedit/diaedit.component';
import { DrugviewComponent } from './drugview/drugview.component';
import { EditdrugComponent } from './editdrug/editdrug.component';
import { LoginpatientComponent } from './loginpatient/loginpatient.component';
import { HomepatientComponent } from './homepatient/homepatient.component';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';
import { LoginpharadComponent } from './loginpharad/loginpharad.component';
import { LoginlabadComponent } from './loginlabad/loginlabad.component';
import { AddtestComponent } from './addtest/addtest.component';
import { ReportComponent } from './report/report.component';
import { ViewreportComponent } from './viewreport/viewreport.component';
import { EdittestComponent } from './edittest/edittest.component';
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    TypingAnimationDirective,
    DashboardComponent,
    AccountComponent,
    LabComponent,
    HospitalComponent,
    PharmComponent,
    ProfileComponent,
    MyprofileComponent,
    ViewprofileComponent,
    EditprofileComponent,
    DiagnosisComponent,
    HistoryComponent,
    DiaviewComponent,
    AdddrugComponent,
    ViewdrugComponent,
    DiaeditComponent,
    DrugviewComponent,
    EditdrugComponent,
    LoginpatientComponent,
    HomepatientComponent,
    LogindoctorComponent,
    LoginpharadComponent,
    LoginlabadComponent,
    AddtestComponent,
    ReportComponent,
    ViewreportComponent,
    EdittestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    HttpModule,
    ToastModule.forRoot(),
    JwtModule.forRoot({
      config: {tokenGetter: tokenGetter}
    })
  ],
  providers: [
    ToastService,
    UserService,
    AuthService,
    AuthGuardLogin,
    SuperAdmin,
    Pharmacy,
    Patient,
    PharmacyAdmin,
    LabAdmin,
    LabAssist,
    Lab,
    Hospital,
    HospitalAdmin,
    Doctor,
    LabService,
    HospitalService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
