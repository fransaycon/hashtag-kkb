import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KkbStartComponent } from './kkb-start/kkb-start.component';
import { AtomsComponent } from './atoms/atoms.component';

@NgModule({
  declarations: [
    AppComponent,
    KkbStartComponent,
    AtomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
