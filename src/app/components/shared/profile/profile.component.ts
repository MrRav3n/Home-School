import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { User } from '../../../core/modals/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(
    private main: MainService
  ) { }
  getUser() {
    this.user = this.main.user;
  }
  ngOnInit(): void {
  this.getUser();
  }

}
