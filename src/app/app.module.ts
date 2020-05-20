import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './core/shared/shared.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { WelcomeComponent } from './components/welcome-page/welcome/welcome.component';
import { LoginComponent } from './components/models/login/login.component';
import { RegisterComponent } from './components/models/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MainTeacherComponent } from './components/teacher/main-teacher/main-teacher.component';
import { NewClassromComponent } from './components/teacher/new-classrom/new-classrom.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './core/interceptor/http-error.interceptor';
import { ClassromComponent } from './components/classrom/classrom/classrom.component';
import { SubjectComponent } from './components/classrom/subject/subject.component';
import { HomeworkComponent } from './components/classrom/homework/homework.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { HomeworkFinishedComponent } from './components/classrom/homework-finished/homework-finished.component';
import { HomeworkResponseComponent } from './components/classrom/homework-response/homework-response.component';
import { ShowCodeComponent } from './components/models/show-code/show-code.component';
import {
  HomeworkResponseModalComponent
} from './components/models/homework-response/homework-response-modal.component';
import { MarksListComponent } from './components/models/marks-list/marks-list.component';
import { ShowHomeworkFileComponent } from './components/shared/show-homework-file/show-homework-file.component';
import { ShowResponseFileComponent } from './components/shared/show-response-file/show-response-file.component';
import { ShowMembersComponent } from './components/models/show-members/show-members.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    MainTeacherComponent,
    NewClassromComponent,
    ContactComponent,
    ProfileComponent,
    ClassromComponent,
    SubjectComponent,
    HomeworkComponent,
    SpinnerComponent,
    HomeworkFinishedComponent,
    HomeworkResponseComponent,
    ShowCodeComponent,
    HomeworkResponseModalComponent,
    MarksListComponent,
    ShowHomeworkFileComponent,
    ShowResponseFileComponent,
    ShowMembersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    SharedService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
      deps: [ToastrService]
    }
  ],

})
export class AppModule { }
