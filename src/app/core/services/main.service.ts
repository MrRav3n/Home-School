import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InterceptorSkipHeader } from '../interceptors/http-error.interceptor';
import { Classrom } from '../models/Classrom';
import { Subject } from '../models/Subject';
import { ToastrService } from 'ngx-toastr';
import { UserServerResponse } from '../models/UserServerResponse';

const errorInterceptorSkip = new HttpHeaders().set(InterceptorSkipHeader, '');
@Injectable({
  providedIn: 'root'
})
export class MainService {
  classrom: Classrom[];
  user: User;
  api = this.shared.apiUrl;
  currentClassrom: Classrom;
  currentSubject: Subject;
  isEducator;
  currentRole: 0 | 1 | 2;

  constructor(
    private shared: SharedService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  loginViaToken() {
    return this.http.get(this.api + 'UserAuth/loginviatoken', { headers: errorInterceptorSkip }).subscribe((res: UserServerResponse) => {
      this.shared.loading = false;
      this.setUserDataAndToken(res);
      this.redirect();
    }, () => {
      this.shared.loading = false;
    });
  }

  login(user: User) {
    return this.http.post(this.api + 'UserAuth/login' , user).subscribe((res: UserServerResponse) => {
      this.shared.loading = false;
      this.setUserDataAndToken(res);
      this.redirect();
    });
  }

  register(user) {
    return this.http.post(this.api + 'UserAuth/register', user).subscribe((res: UserServerResponse) => {
      this.shared.loading = false;
      this.setUserDataAndToken(res);
      this.toastr.success('Rejestracja przebiegła pomyślnie', 'Udało się!');
      this.shared.openRegisterModal();
      this.redirect();
    });
  }

  logout() {
    localStorage.removeItem('homeschooltoken');
    this.user = undefined;
    this.classrom = undefined;
    this.redirect();
  }

  setUserDataAndToken(res: UserServerResponse) {
    this.user = res.userToReturn;
    this.classrom = res.classes;
    if (res.token) {
      localStorage.setItem('homeschooltoken', res.token);
    }
  }

  redirect() {
    if (!this.user) {
      this.router.navigateByUrl('');
    } else if (this.user.userRole === 0) {
      this.router.navigateByUrl('/classrom/0');
    } else if (this.user.userRole === 1) {
      this.router.navigateByUrl('/classrom/0');
    }
  }

}
