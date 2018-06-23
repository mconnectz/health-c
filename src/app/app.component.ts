import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  user:any={};

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private auth: AuthService,
    private router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  // Function to logout user
  onLogoutClick() {
    this.auth.logout(); // Logout user
    this.router.navigate(['/']); // Navigate back to home page
  }


  ngOnInit() {
    this.user = this.auth.currentUser;
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
 
  
}
