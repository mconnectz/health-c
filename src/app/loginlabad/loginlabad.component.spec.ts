import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlabadComponent } from './loginlabad.component';

describe('LoginlabadComponent', () => {
  let component: LoginlabadComponent;
  let fixture: ComponentFixture<LoginlabadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginlabadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
