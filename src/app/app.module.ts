import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, EligibilityComponent, CustomButtonComponent],
  imports: [BrowserModule, AppRoutingModule, StickyNavModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
