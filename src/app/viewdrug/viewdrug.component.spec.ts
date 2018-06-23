import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdrugComponent } from './viewdrug.component';

describe('ViewdrugComponent', () => {
  let component: ViewdrugComponent;
  let fixture: ComponentFixture<ViewdrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
