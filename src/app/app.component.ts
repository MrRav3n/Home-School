import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './core/main/main.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from './core/shared/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loading = true;

  constructor(
    private router: Router,
    private main: MainService,
    private toastr: ToastrService,
    public shared: SharedService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('homeschooltoken')) {
      this.main.loginViaToken();
    }
   this.main.redirect();
  }
}
