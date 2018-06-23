import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdrugComponent } from './editdrug.component';

describe('EditdrugComponent', () => {
  let component: EditdrugComponent;
  let fixture: ComponentFixture<EditdrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
