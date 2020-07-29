import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacUploadComponent } from './fac-upload.component';

describe('FacUploadComponent', () => {
  let component: FacUploadComponent;
  let fixture: ComponentFixture<FacUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
