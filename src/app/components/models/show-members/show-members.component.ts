import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';

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
      this.members = res;
      console.log(res);
      this.showMembers.nativeElement.click();
    });
  }
  deleteUser(i) {
    console.log(i);
    const bodyToSend = {
      userToDeleteID: this.main.currentClassrom.members[i],
      classID: this.main.currentClassrom.id,
    };
    //this.classService.deleteClassMember(bodyToSend);
  }
}
