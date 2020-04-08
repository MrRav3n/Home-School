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

  user: User = {
    name: 'Jan',
    surrname: 'Kowalski',
    role: 1,
    email: 'jan@wp.pl',
    friends: ['Adam', 'Ewa']
  };
  api = this.shared.api;


  constructor(
    private shared: SharedService,
    private http: HttpClient,
    private router: Router,
  ) { }

  login(user): Observable<any> {
    return this.http.post(`${this.api}api/userauth/login` , user);
  }

  ifUserExists() {
    if (!this.user) {
      this.router.navigateByUrl('/');
    } else if (this.user.role === 0) {
      this.router.navigateByUrl('student');
    } else if (this.user.role === 1) {
      this.router.navigateByUrl('teacher');
    }
  }

}
