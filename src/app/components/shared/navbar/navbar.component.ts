import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../../main-page/login/login.component';
import { SharedService } from '../../../core/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public shared: SharedService) { }
  ngOnInit(): void {
  }
}
