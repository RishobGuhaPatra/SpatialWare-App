import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaistCalculationPage } from './waist-calculation.page';

describe('WaistCalculationPage', () => {
  let component: WaistCalculationPage;
  let fixture: ComponentFixture<WaistCalculationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaistCalculationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaistCalculationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
