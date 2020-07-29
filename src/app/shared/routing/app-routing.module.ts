import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

import { AuthGuard } from "../../shared/guard/auth.guard";
import { MainComponent } from 'src/app/components/main/main.component';
import { FacSignComponent } from 'src/app/components/fac-sign/fac-sign.component';
import { FacultyComponent } from 'src/app/components/faculty/faculty.component';
import { FacUploadComponent } from 'src/app/components/fac-upload/fac-upload.component';
import { StudentViewComponent } from 'src/app/components/student-view/student-view.component';
import { SemesterComponent } from 'src/app/components/semester/semester.component';
import { FacSemComponent } from 'src/app/components/fac-sem/fac-sem.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component:MainComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'fac-sign', component:FacSignComponent},
  { path: 'faculty',component:FacultyComponent},
  { path:'fac-upload',component:FacUploadComponent},
  {path:'student-view',component:StudentViewComponent},
  {path:'semester',component:SemesterComponent},
  {path:'fac-sem',component:FacSemComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
