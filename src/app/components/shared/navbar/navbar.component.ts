import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../../models/login/login.component';
import { SharedService } from '../../../core/shared/shared.service';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public shared: SharedService,
    public main: MainService,
  ) { }
  ngOnInit(): void {}
}
