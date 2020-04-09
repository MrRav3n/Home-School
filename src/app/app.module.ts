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
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MainTeacherComponent } from './components/teacher/main-teacher/main-teacher.component';
import { MainStudentComponent } from './components/student/main-student/main-student.component';
import { NewClassromComponent } from './components/teacher/new-classrom/new-classrom.component';
import { FriendsComponent } from './components/shared/friends/friends.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    MainTeacherComponent,
    MainStudentComponent,
    NewClassromComponent,
    FriendsComponent,
    ContactComponent,
    ProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot({
          timeOut: 10000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        }),
    ],
  providers: [
    SharedService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
