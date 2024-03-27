import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { JobSeekerRegisterComponent } from './job-seeker-register/job-seeker-register.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:'',component:RegisterFormComponent},
  {path:'Home',component:HomeComponent},
  {path:'employeeRegister',component:EmployeeRegisterComponent},
  {path:'jobSeekerRegister',component:JobSeekerRegisterComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
