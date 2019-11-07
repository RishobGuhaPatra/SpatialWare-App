import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceSettingsPage } from './voice-settings.page';

describe('VoiceSettingsPage', () => {
  let component: VoiceSettingsPage;
  let fixture: ComponentFixture<VoiceSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
