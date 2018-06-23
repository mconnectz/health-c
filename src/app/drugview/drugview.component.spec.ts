import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugviewComponent } from './drugview.component';

describe('DrugviewComponent', () => {
  let component: DrugviewComponent;
  let fixture: ComponentFixture<DrugviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
