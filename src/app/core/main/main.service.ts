import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { User } from '../modals/User';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  user: User;
  api = this.shared.api;


  constructor(
    private shared: SharedService,
    private http: HttpClient,
    private router: Router,
  ) { }
  loginViaToken(): Observable<any> {
    return this.http.get(`${this.api}api/userauth/loginviatoken`);
  }
  login(user): Observable<any> {
    return this.http.post(`${this.api}api/userauth/login` , user);
  }
  register(user): Observable<any> {
    return this.http.post(`${this.api}api/userauth/register`, user);
  }

  async ifUserExists() {
    if (localStorage.getItem('homeschooltoken')) {
      await this.loginViaToken().subscribe(res => {
        console.log(res);
      });
    }
    if (!this.user) {
      this.router.navigateByUrl('/');
    } else if (this.user.userRole === 0) {
      this.router.navigateByUrl('student');
    } else if (this.user.userRole === 1) {
      this.router.navigateByUrl('teacher');
    }
  }

}
