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
import { ToastrService } from 'ngx-toastr';
import { SharedService } from './core/shared/shared.service';
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
    private toastr: ToastrService,
    public shared: SharedService
  ) {
  //   this.router.events.subscribe((event: Event) => {
  //   switch ( false ) {
  //     case event instanceof NavigationStart: {
  //       this.shared.loading = true;
  //       break;
  //     }
  //     case event instanceof NavigationEnd:
  //     case event instanceof NavigationCancel:
  //     case event instanceof NavigationError: {
  //       this.shared.loading = false;
  //       break;
  //     }
  //     default: {
  //       break;
  //     }
  //   }
  // });
  }

  ngOnInit(): void {
    if (!this.main.user) {
      this.main.ifUserExists();
    }
  }
}
