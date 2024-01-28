import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputVitalsComponent } from './input-vitals.component';

describe('InputVitalsComponent', () => {
  let component: InputVitalsComponent;
  let fixture: ComponentFixture<InputVitalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputVitalsComponent]
    });
    fixture = TestBed.createComponent(InputVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
