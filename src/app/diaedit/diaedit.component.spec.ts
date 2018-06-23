import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaeditComponent } from './diaedit.component';

describe('DiaeditComponent', () => {
  let component: DiaeditComponent;
  let fixture: ComponentFixture<DiaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
