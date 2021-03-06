import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../../../core/services/main.service';
import { ClassService } from '../../../core/services/class.service';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.scss']
})
export class ShowMembersComponent implements OnInit {
  members;
  @ViewChild('showMembers') showMembers;

  constructor(
    private shared: SharedService,
    private toastr: ToastrService,
    private main: MainService,
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.shared.openMembers.subscribe(res => {
      this.members = res.users;
      this.showMembers.nativeElement.click();
    });
  }

  deleteUser(i) {
    const bodyToSend = {
      userToDeleteID: this.main.currentClassrom.members[i],
      classID: this.main.currentClassrom.id,
    };
    this.classService.deleteClassMember(bodyToSend);
  }
}
