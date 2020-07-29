import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacSignComponent } from './fac-sign.component';

describe('FacSignComponent', () => {
  let component: FacSignComponent;
  let fixture: ComponentFixture<FacSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
