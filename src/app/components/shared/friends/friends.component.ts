import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends;
  newFriend: FormGroup;
  constructor(
    private main: MainService
  ) { }

  ngOnInit(): void {
    this.friends = this.main.user.friends;
    this.newFriend = new FormGroup({
      searchName: new FormControl(''),
    });
  }


}
