import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepatientComponent } from './homepatient.component';

describe('HomepatientComponent', () => {
  let component: HomepatientComponent;
  let fixture: ComponentFixture<HomepatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
