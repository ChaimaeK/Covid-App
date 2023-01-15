import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCenterListComponent } from './vaccination-center-list.component';

describe('VaccinationCenterListComponent', () => {
  let component: VaccinationCenterListComponent;
  let fixture: ComponentFixture<VaccinationCenterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationCenterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
