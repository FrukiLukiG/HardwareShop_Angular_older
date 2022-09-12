import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HardwareComponent } from './hardware-component/hardware.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';
import { ReviewSearchComponent } from './review-search/review-search.component';
import { ReviewInfoComponent } from './review-info/review-info.component';

const routes: Routes = [
  { path: 'hardware', component: HardwareComponent},
  { path: 'detail/:code', component: HardwareDetailsComponent},
  { path: 'review', component: ReviewSearchComponent},
  { path: 'reviewInfo', component: ReviewInfoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
