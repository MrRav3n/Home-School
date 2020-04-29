import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { ActivatedRoute } from '@angular/router';
import { Classrom } from '../../../core/modals/Classrom';
import { Subject } from '../../../core/modals/Subject';

@Component({
  selector: 'app-classrom',
  templateUrl: './classrom.component.html',
  styleUrls: ['./classrom.component.scss']
})
export class ClassromComponent implements OnInit {
  userRole: 0 | 1 | 2;
  classrom: Classrom;
  subjects: [Subject];
  constructor(
    public main: MainService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.classrom = this.main.currentClassrom = this.main.classrom[+params.get('classID')];
      this.checkUserRole();
      this.subjects = this.classrom.subjects;
      this.setCurrentSubject(0);
    });
  }
  checkUserRole() {
    if (this.main.user.id === this.classrom.creatorID) {
      this.main.currentRole = 2;
    } else if (this.main.user.userRole === 0) {
      this.main.currentRole = 0;
    } else if (this.main.user.userRole === 1) {
      this.main.currentRole = 1;
    }
  }
  setCurrentSubject(i) {
    this.main.currentSubject = this.main.currentClassrom.subjects[i];
  }
}
