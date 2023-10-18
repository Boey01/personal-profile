import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopSectionComponent,
    BottomSectionComponent,
    StickyBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
