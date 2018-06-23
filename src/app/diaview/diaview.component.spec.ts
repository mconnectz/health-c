import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaviewComponent } from './diaview.component';

describe('DiaviewComponent', () => {
  let component: DiaviewComponent;
  let fixture: ComponentFixture<DiaviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
