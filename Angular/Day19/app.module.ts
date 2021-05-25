import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, CompImport } from './app-routing.module';
import { AppComponent } from './app.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { EventBinding3Component } from './event-binding3/event-binding3.component';
import { FormsModule } from '@angular/forms';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child3OfChild1Component } from './child3-of-child1/child3-of-child1.component';
import { InbuildpipeComponent } from './inbuildpipe/inbuildpipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipe } from './summary.pipe';
import { CourseComponent } from './course/course.component';
import { MyService } from './mycourse.service';
import { MyhttpComponent } from './myhttp/myhttp.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StylebindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    Eventbinding2Component,
    EventBinding3Component,
    IfDirectiveComponent,
    FordirectiveComponent,
    SwitchDirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child3OfChild1Component,
    InbuildpipeComponent,
    CustomPipeComponent,
    SummaryPipe,
    CourseComponent,
    MyhttpComponent,
    CompImport
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
