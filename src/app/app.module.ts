import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { FocusSectionComponent } from './focus-section/focus-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent,
    FocusSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
