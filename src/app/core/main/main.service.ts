import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { User } from '../modals/User';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterceptorSkipHeader } from '../interceptor/http-error.interceptor';
import { Classrom } from '../modals/Classrom';
import { Subject } from '../modals/Subject';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
@Injectable({
  providedIn: 'root'
})
export class MainService {

  classrom: [Classrom];
  user: User;
  api = this.shared.api;
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
  loginViaToken(): Observable<any> {
    return this.http.get(`${this.api}UserAuth/loginviatoken`, { headers });
  }
  login(user): Observable<any> {
    return this.http.post(`${this.api}UserAuth/login` , user);
  }
  register(user): Observable<any> {
    return this.http.post(`${this.api}UserAuth/register`, user);
  }
  logout() {
    localStorage.removeItem('homeschooltoken');
    this.user = undefined;
    this.classrom = undefined;
    this.ifUserExists();
    // this.toastr.success('Pomyślnie się wylogowałeś.', 'Udało się!');
  }
  async tokenLogin() {
    if (localStorage.getItem('homeschooltoken')) {
      try {
        const data = await this.loginViaToken().toPromise();
        console.log(data);
        this.user = data.userToReturn;
        this.classrom = data.classes;
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
      this.router.navigateByUrl('123');
    }
  }

}
