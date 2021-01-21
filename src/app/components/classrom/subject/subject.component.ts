import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../core/classService/class.service';
declare var jQuery: any;
import { Location } from '@angular/common';
import * as moment from 'moment';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SharedService } from '../../../core/shared/shared.service';
import { Homework } from '../../../core/models/Homework';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  userRole;
  currentHomeworks = [];
  finishedHomeworks = [];
  currentlyShowed: 'liveHomeworks' | 'finishedHomeworks' | 'chat' = 'liveHomeworks';
  whichHomeworks = 1;
  showChat = false;
  currentTime;
  @Input() set currentSubSet(sub) {
    this.showChat = false;
    this.sortHomeworks(this.currentTime);
  }
  @ViewChild('timeValue') timeValue;
  constructor(
    public main: MainService,
    private classService: ClassService,
    private toastr: ToastrService,
    private router: Router,
    private location: Location,
    private shared: SharedService
  ) {
  }
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
    for (let i = 0; i < this.main.currentSubject.homeworks.length; i++) {
      const currHom = this.main.currentSubject.homeworks[i];
      if (this.main.currentRole === 0) { // returning homeworks for student
        if (currHom.endDate > currentTime && !currHom.responses[0]) {
          this.currentHomeworks.push(currHom);
        } else {
          this.finishedHomeworks.push(currHom);
        }
      } else {
        if (currHom.endDate > currentTime) {
          this.currentHomeworks.push(currHom);
        } else {
          this.finishedHomeworks.push(currHom);
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
