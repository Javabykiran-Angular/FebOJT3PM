import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { EventBinding3Component } from './event-binding3/event-binding3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StylebindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    Eventbinding2Component,
    EventBinding3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
