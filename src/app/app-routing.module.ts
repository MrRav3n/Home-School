import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome-page/welcome/welcome.component';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';
import { RegisterComponent } from './components/main-page/register/register.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'register', component: RegisterComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
