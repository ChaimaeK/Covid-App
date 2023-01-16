import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCreationComponent } from './center-creation.component';

describe('CenterCreationComponent', () => {
  let component: CenterCreationComponent;
  let fixture: ComponentFixture<CenterCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
