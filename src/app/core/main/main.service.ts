import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { User } from '../modals/User';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterceptorSkipHeader } from '../interceptor/http-error.interceptor';
const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
@Injectable({
  providedIn: 'root'
})
export class MainService {

  classrom;
  user: User;
  api = this.shared.api;

  constructor(
    private shared: SharedService,
    private http: HttpClient,
    private router: Router,
  ) { }
  loginViaToken(): Observable<any> {
    return this.http.get(`${this.api}userauth/loginviatoken`, { headers });
  }
  login(user): Observable<any> {
    return this.http.post(`${this.api}userauth/login` , user);
  }
  register(user): Observable<any> {
    return this.http.post(`${this.api}userauth/register`, user);
  }
  logout() {
    localStorage.removeItem('homeschooltoken');
    this.user = undefined;
    this.classrom = undefined;
    this.ifUserExists();
  }
  async tokenLogin() {
    if (localStorage.getItem('homeschooltoken')) {
      try {
        const data = await this.loginViaToken().toPromise();
        this.user = data.userToReturn;
        this.classrom = data.userClasses[0];
        console.log(this.user);
        console.log(this.classrom);
      } catch {
      }
    }
  }
  async ifUserExists() {
    await this.tokenLogin();

    this.shared.loading = false;
    if (!this.user) {
      this.router.navigateByUrl('/');
    } else if (this.user.userRole === 0) {
      this.router.navigateByUrl('student');
    } else if (this.user.userRole === 1) {
      this.router.navigateByUrl('classrom');
    }
  }

}
