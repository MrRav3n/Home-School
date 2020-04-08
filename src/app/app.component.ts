import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { MainService } from './core/main/main.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;
  constructor(
    private router: Router,
    private main: MainService,
  ) {
    this.router.events.subscribe((event: Event) => {
    switch ( true ) {
      case event instanceof NavigationStart: {
        this.loading = true;
        break;
      }
      case event instanceof NavigationEnd:
      case event instanceof NavigationCancel:
      case event instanceof NavigationError: {
        this.loading = false;
        break;
      }
      default: {
        break;
      }
    }
  });
  }

  ngOnInit(): void {
    this.main.ifUserExists();
    const user = {
      username: 'dsadasdassdadsaasdasd',
      password: 'kupa',
      code: '',
      role: 0
    };
    this.main.login(user).subscribe(res => {
      console.log(res);
    });
    // this.router.navigateByUrl('profile');
  }
}
