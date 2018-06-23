import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmComponent } from './pharm.component';

describe('PharmComponent', () => {
  let component: PharmComponent;
  let fixture: ComponentFixture<PharmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
