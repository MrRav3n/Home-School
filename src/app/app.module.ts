import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './core/services/shared.service';
import { NavbarComponent } from './components/static-pages/navbar/navbar.component';
import { WelcomeComponent } from './components/static-pages/welcome/welcome.component';
import { LoginComponent } from './components/models/login/login.component';
import { RegisterComponent } from './components/models/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MainTeacherComponent } from './components/classrom/main-teacher/main-teacher.component';
import { ManageClassromComponent } from './components/classrom/manage-classrom/manage-classrom.component';
import { ContactComponent } from './components/static-pages/contact/contact.component';
import { ProfileComponent } from './components/static-pages/profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { ClassromComponent } from './components/classrom/classrom/classrom.component';
import { SubjectComponent } from './components/subject/subject/subject.component';
import { HomeworkComponent } from './components/subject/homework/homework/homework.component';
import { SpinnerComponent } from './components/static-pages/spinner/spinner.component';
import { HomeworkFinishedComponent } from './components/subject/homework/homework-finished/homework-finished.component';
import { HomeworkResponseComponent } from './components/subject/homework/homework-response/homework-response.component';
import { ShowCodeComponent } from './components/models/show-code/show-code.component';
import {
  HomeworkResponseModalComponent
} from './components/models/homework-response/homework-response-modal.component';
import { MarksListComponent } from './components/models/marks-list/marks-list.component';
// tslint:disable-next-line:max-line-length
import { ShowHomeworkFileComponent } from './components/subject/homework/show-homework-data/show-homework-file/show-homework-file.component';
// tslint:disable-next-line:max-line-length
import { ShowResponseFileComponent } from './components/subject/homework/show-homework-data/show-response-file/show-response-file.component';
import { ShowMembersComponent } from './components/models/show-members/show-members.component';
import { TextChatComponent } from './components/subject/text-chat/text-chat.component';
import { AddHomeworkComponent } from './components/subject/homework/add-homework/add-homework.component';
import { AddHomeworkResponseComponent } from './components/subject/homework/add-homework-response/add-homework-response.component';
import { AddNewQuizComponent } from './components/quiz/add-new-quiz/add-new-quiz.component';
import { AddQuestionToQuizComponent } from './components/quiz/add-question-to-quiz/add-question-to-quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    MainTeacherComponent,
    ManageClassromComponent,
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
    TextChatComponent,
    AddHomeworkComponent,
    AddHomeworkResponseComponent,
    AddNewQuizComponent,
    AddQuestionToQuizComponent,
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
      deps: [ToastrService, SharedService]
    }
  ],

})
export class AppModule { }
