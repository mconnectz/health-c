import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpatientComponent } from './loginpatient.component';

describe('LoginpatientComponent', () => {
  let component: LoginpatientComponent;
  let fixture: ComponentFixture<LoginpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
