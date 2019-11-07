import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VoiceSettingsPage } from './voice-settings.page';

const routes: Routes = [
  {
    path: '',
    component: VoiceSettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VoiceSettingsPage]
})
export class VoiceSettingsPageModule {}
