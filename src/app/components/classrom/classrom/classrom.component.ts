import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-classrom',
  templateUrl: './classrom.component.html',
  styleUrls: ['./classrom.component.scss']
})
export class ClassromComponent implements OnInit {
  userRole: 0 | 1 | 2;
  constructor(public main: MainService) { }

  ngOnInit(): void {
    if (this.main.user) {
      this.checkUserRole();
    }
  }
  checkUserRole() {
    if (this.main.user.id === this.main.classrom.creatorID) {
      this.userRole = 2;
    } else if (this.main.user.userRole === 0) {
      this.userRole = 0;
    } else if (this.main.user.userRole === 1) {
      this.userRole = 1;
    }
  }
}
