import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';
import {MatCardModule} from '@angular/material/card';
// App components
import {MainComponent} from './components/main/main.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
 import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


// Auth service
import { AuthService } from './shared/services/auth.service';
import { FacultyComponent } from './components/faculty/faculty.component';
import { FacSignComponent } from './components/fac-sign/fac-sign.component';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DropzoneDirective } from './dropzone.directive';

import { AngularFireStorage } from '@angular/fire/storage';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { FacUploadComponent } from './components/fac-upload/fac-upload.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SemesterComponent } from './components/semester/semester.component';
import { FacSemComponent } from './components/fac-sem/fac-sem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







// import { DropzoneDirective } from './dropzone.directive';
// import { UploaderComponent } from './uploader/uploader.component';
// import { UploadTaskComponent } from './upload-task/upload-task.component';





@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MainComponent,
    FacultyComponent,
    FacSignComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    FacUploadComponent,
    StudentViewComponent,
    SemesterComponent,
    FacSemComponent,
  
 
  
   
   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [AuthService,AngularFireStorage],
  bootstrap: [AppComponent]
})

export class AppModule { }
