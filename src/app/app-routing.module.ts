import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome-page/welcome/welcome.component';
import { RegisterComponent } from './components/models/register/register.component';
import { MainTeacherComponent } from './components/teacher/main-teacher/main-teacher.component';
import { NewClassromComponent } from './components/teacher/new-classrom/new-classrom.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { ClassromComponent } from './components/classrom/classrom/classrom.component';
import { SubjectComponent } from './components/classrom/subject/subject.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'mainPage', component: MainTeacherComponent},
  {path: 'teacher/create-classrom', component: NewClassromComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'classrom/:classID', component: ClassromComponent},
  {path: 'subject', component: SubjectComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
