import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './core/main/main.service';
import { SharedService } from './core/shared/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router,
    private main: MainService,
    public shared: SharedService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('homeschooltoken')) {
      this.main.loginViaToken();
    } else {
      this.shared.loading = false;
      this.main.redirect();
    }
  }
}
