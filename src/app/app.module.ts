import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './hardware-app/app.component';
import { HardwareComponent } from './hardware-component/hardware.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReviewSearchComponent } from './review-search/review-search.component';
import { ReviewInfoComponent } from './review-info/review-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareComponent,
    HardwareDetailsComponent,
    ReviewSearchComponent,
    ReviewInfoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
