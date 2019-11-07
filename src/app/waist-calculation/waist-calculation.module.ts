import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WaistCalculationPage } from './waist-calculation.page';

const routes: Routes = [
  {
    path: '',
    component: WaistCalculationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WaistCalculationPage]
})
export class WaistCalculationPageModule {}
