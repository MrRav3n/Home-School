import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { User } from '../../../core/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(
    public main: MainService
  ) { }
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.user = this.main.user;
  }

}
