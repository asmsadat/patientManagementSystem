import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionMakerComponent } from './prescription-maker.component';

describe('PrescriptionMakerComponent', () => {
  let component: PrescriptionMakerComponent;
  let fixture: ComponentFixture<PrescriptionMakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionMakerComponent]
    });
    fixture = TestBed.createComponent(PrescriptionMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
