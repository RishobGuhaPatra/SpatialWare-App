import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyInfoPage } from './emergency-info.page';

describe('EmergencyInfoPage', () => {
  let component: EmergencyInfoPage;
  let fixture: ComponentFixture<EmergencyInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
