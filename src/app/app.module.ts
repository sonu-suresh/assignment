import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EligibilityComponent,
    CustomButtonComponent,
    CustomSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StickyNavModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
