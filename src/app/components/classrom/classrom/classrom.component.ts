import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { ActivatedRoute } from '@angular/router';
import { Classrom } from '../../../core/modals/Classrom';
import { Subject } from '../../../core/modals/Subject';
import { SharedService } from '../../../core/shared/shared.service';
import { ClassService } from '../../../core/classService/class.service';

@Component({
  selector: 'app-classrom',
  templateUrl: './classrom.component.html',
  styleUrls: ['./classrom.component.scss']
})
export class ClassromComponent implements OnInit {
  userRole: 0 | 1 | 2;
  classrom: Classrom;
  subjects: [Subject];
  @ViewChild('subject') subjectDiv;
  constructor(
    public main: MainService,
    private route: ActivatedRoute,
    private shared: SharedService,
    private classService: ClassService,
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.main.currentClassrom = this.main.classrom[+params.get('classID')];
      this.classrom = this.main.currentClassrom;
      this.subjects = this.classrom.subjects;
      this.main.isEducator = this.main.user.id === this.classrom.creatorID;
      this.setCurrentSubject(0);
    });
  }

  checkUserRole() {
    if (this.main.currentSubject) {
      if (this.main.user.id === this.main.currentSubject.teacherID) {
        this.main.currentRole = 1;
      } else if (this.main.user.userRole === 0) {
        this.main.currentRole = 0;
      } else if (this.main.user.userRole === 1) {
        this.main.currentRole = 2;
      }
    }
  }
  showMembers() {
    this.classService.showClassromMembers({classID: this.main.currentClassrom.id}).subscribe(res => {
      this.shared.openMembersModal(res);
    });
  }
  async setCurrentSubject(i) {
    if (this.subjectDiv) {
      this.subjectDiv.nativeElement.classList.toggle('opacity0');
      function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      await timeout(200);
      this.main.currentSubject = this.main.currentClassrom.subjects[i];
      this.subjectDiv.nativeElement.classList.toggle('opacity0');
    } else {
      this.main.currentSubject = this.main.currentClassrom.subjects[i];
    }

    this.checkUserRole();
  }
  showCode(e, id) {
    e.stopPropagation();
    e.preventDefault();
    this.shared.openCodeModal(id);
  }
}
