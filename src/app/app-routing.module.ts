import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome-page/welcome/welcome.component';
import { RegisterComponent } from './components/models/register/register.component';
import { MainTeacherComponent } from './components/teacher/main-teacher/main-teacher.component';
import { NewClassromComponent } from './components/teacher/new-classrom/new-classrom.component';
import { FriendsComponent } from './components/shared/friends/friends.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { MainStudentComponent } from './components/student/main-student/main-student.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'teacher', component: MainTeacherComponent},
  {path: 'teacher/create-classrom', component: NewClassromComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'student', component: MainStudentComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'profile', component: ProfileComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
