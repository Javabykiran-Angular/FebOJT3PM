import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpolyeeComponent } from './add-empolyee/add-empolyee.component';
import { AuthGuard } from './auth.guard';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path:'',redirectTo:"/login",pathMatch:"full"
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'addEmployee',component:AddEmpolyeeComponent,canActivate:[AuthGuard]
  },
  {
    path:'EmployeeDetails/:id',component:EmployeeDetailsComponent,canActivate:[AuthGuard]
  },
  {
    path:'**', component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
