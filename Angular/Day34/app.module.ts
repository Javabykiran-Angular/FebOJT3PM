import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle'; 
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddEmpolyeeComponent } from './add-empolyee/add-empolyee.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { FilterPipe } from './filter.pipe';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AddEmpolyeeComponent,
    EmployeeDetailsComponent,
    NotfoundComponent,
    UpdateemployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ParticlesModule, // Angular Particles
    HttpClientModule,
    NgxPaginationModule, //For Paginations
    ModalModule.forRoot(),  //For ngx-POP UP 
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents:[MatConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
