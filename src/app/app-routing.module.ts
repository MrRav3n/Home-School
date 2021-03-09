import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/static-pages/welcome/welcome.component';
import { RegisterComponent } from './components/models/register/register.component';
import { MainTeacherComponent } from './components/classrom/main-teacher/main-teacher.component';
import { ManageClassromComponent } from './components/classrom/manage-classrom/manage-classrom.component';
import { ContactComponent } from './components/static-pages/contact/contact.component';
import { ProfileComponent } from './components/static-pages/profile/profile.component';
import { ClassromComponent } from './components/classrom/classrom/classrom.component';
import { SubjectComponent } from './components/subject/subject/subject.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'mainPage', component: MainTeacherComponent},
  {path: 'teacher/create-classrom', component: ManageClassromComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'classrom/:classID', component: ClassromComponent},
  {path: 'subject', component: SubjectComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
