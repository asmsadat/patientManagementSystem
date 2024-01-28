import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingAppointmentComponent } from './making-appointment.component';

describe('MakingAppointmentComponent', () => {
  let component: MakingAppointmentComponent;
  let fixture: ComponentFixture<MakingAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakingAppointmentComponent]
    });
    fixture = TestBed.createComponent(MakingAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
