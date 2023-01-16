import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminConfigComponent } from './super-admin-config.component';

describe('SuperAdminConfigComponent', () => {
  let component: SuperAdminConfigComponent;
  let fixture: ComponentFixture<SuperAdminConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
