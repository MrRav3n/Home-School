import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { User } from '../modals/User';
import { Router } from '@angular/router';

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


  constructor(
    private shared: SharedService,
    private router: Router,
  ) { }

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
