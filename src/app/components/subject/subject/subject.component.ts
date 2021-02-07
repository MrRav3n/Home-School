import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../core/services/main.service';
import { ClassService } from '../../../core/services/class.service';
import { Location } from '@angular/common';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SharedService } from '../../../core/services/shared.service';
import { Homework } from '../../../core/models/Homework';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})

export class SubjectComponent implements OnInit {
  @Input() set currentSubSet(sub) {
    this.showChat = false;
    this.sortHomeworks(this.currentTime);
  }
  @ViewChild('timeValue') timeValue;
  userRole;
  currentHomeworks = [];
  finishedHomeworks = [];
  currentlyShowed: 'liveHomeworks' | 'finishedHomeworks' | 'chat' = 'liveHomeworks';
  showChat = false;
  currentTime;

  constructor(
    public main: MainService,
    private classService: ClassService,
    private toastr: ToastrService,
    private router: Router,
    private location: Location,
    private shared: SharedService
  ) {}

  ngOnInit(): void {
    if (!this.main.currentClassrom) {
      this.router.navigateByUrl('classrom/0');
    }
    this.currentTime = moment().toISOString();
    this.sortHomeworks(this.currentTime);
    this.shared.switchHomework.subscribe(res => {
      const index = this.currentHomeworks.findIndex(v => v.id === res);
      if (index > -1) {
        this.currentHomeworks.splice(index, 1);
        this.finishedHomeworks.push(this.currentHomeworks[index]);
      }
    });
  }

  navigateOverSubject(whereToGo: 'liveHomeworks' | 'finishedHomeworks' | 'chat') {
    this.currentlyShowed = whereToGo;
  }

  whatIsCurrentlyShowed() {
    return this.currentlyShowed;
  }

  goBack() {
    this.location.back();
  }

  outputNewHomework(homework: Homework) {
    this.currentHomeworks.push(homework);
  }

  sortHomeworks(currentTime) {
    this.currentHomeworks = [];
    this.finishedHomeworks = [];
    for (const homework of this.main.currentSubject.homeworks) {
      if (this.main.currentRole === 0) { // returning homeworks for student
        if (homework.endDate > currentTime && !homework.responses[0]) {
          this.currentHomeworks.push(homework);
        } else {
          this.finishedHomeworks.push(homework);
        }
      } else {
        if (homework.endDate > currentTime) {
          this.currentHomeworks.push(homework);
        } else {
          this.finishedHomeworks.push(homework);
        }
      }
    }
  }

  checkIfStudent() {
    if (this.main.currentRole === 0) {
      return true;
    }
  }

  checkIfTeacher() {
    if (this.main.currentRole === 1) {
      return true;
    }
  }

  checkIfEducator() {
    if (this.main.currentRole === 2) {
      return true;
    }
  }
}
