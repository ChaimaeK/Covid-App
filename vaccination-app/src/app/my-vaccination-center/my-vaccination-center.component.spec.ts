import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVaccinationCenterComponent } from './my-vaccination-center.component';

describe('MyVaccinationCenterComponent', () => {
  let component: MyVaccinationCenterComponent;
  let fixture: ComponentFixture<MyVaccinationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVaccinationCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVaccinationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
