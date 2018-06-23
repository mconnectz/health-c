import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddrugComponent } from './adddrug.component';

describe('AdddrugComponent', () => {
  let component: AdddrugComponent;
  let fixture: ComponentFixture<AdddrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
