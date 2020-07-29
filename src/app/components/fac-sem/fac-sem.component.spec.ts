import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacSemComponent } from './fac-sem.component';

describe('FacSemComponent', () => {
  let component: FacSemComponent;
  let fixture: ComponentFixture<FacSemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacSemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
