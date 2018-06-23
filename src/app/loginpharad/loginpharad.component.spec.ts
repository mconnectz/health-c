import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpharadComponent } from './loginpharad.component';

describe('LoginpharadComponent', () => {
  let component: LoginpharadComponent;
  let fixture: ComponentFixture<LoginpharadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpharadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpharadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
