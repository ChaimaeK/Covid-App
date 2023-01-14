import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCenterComponent } from './vaccination-center.component';

describe('VaccinationCenterComponent', () => {
  let component: VaccinationCenterComponent;
  let fixture: ComponentFixture<VaccinationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
