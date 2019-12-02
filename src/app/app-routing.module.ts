import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'personal-info', loadChildren: './personal-info/personal-info.module#PersonalInfoPageModule' },
  { path: 'emergency-info', loadChildren: './emergency-info/emergency-info.module#EmergencyInfoPageModule' },
  { path: 'feedback-settings', loadChildren: './feedback-settings/feedback-settings.module#FeedbackSettingsPageModule' },
  { path: 'mode-settings', loadChildren: './mode-settings/mode-settings.module#ModeSettingsPageModule' },
  { path: 'waist-calculation', loadChildren: './waist-calculation/waist-calculation.module#WaistCalculationPageModule' },
  { path: 'voice-settings', loadChildren: './voice-settings/voice-settings.module#VoiceSettingsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
