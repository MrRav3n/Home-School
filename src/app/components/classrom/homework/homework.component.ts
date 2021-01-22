import { Component, Input, OnInit } from '@angular/core';
import { Homework } from '../../../core/models/Homework';
import * as moment from 'moment';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../core/shared/shared.service';


@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  @Input() set homeworkSet(homework) {
    this.setHomeworkData(homework);
  }
  @Input() set iteratorSet(iter: number) {
    this.iterator = iter;
  }
  homework: Homework;
  iterator: number;
  clickedStatus = false;
  startTime: string;
  endTime: string;
  leftHours: number;
  leftMinutes: number;

  constructor(
    private main: MainService,
    private classService: ClassService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private shared: SharedService
  ) {

  }
  setHomeworkData(hom: Homework) {
    this.homework = hom;
    const endDate = moment(this.homework.endDate);
    const currentTime = moment();
    const timeLeft = endDate.diff(currentTime, 'minutes');
    this.leftHours = Math.floor(timeLeft / 60);
    this.leftMinutes = Math.floor(timeLeft - (this.leftHours * 60 ));
    this.startTime = moment(this.homework.createDate).format('YYYY-MM-DD HH:mm:ss');
    this.endTime = moment(this.homework.endDate).format('YYYY-MM-DD HH:mm:ss');
  }
  addFocusClass() {
    if (this.clickedStatus) {
      setTimeout(() => this.clickedStatus = !this.clickedStatus, 400);
    } else {
      this.clickedStatus = !this.clickedStatus;
    }
  }
  ngOnInit(): void {
  }

}
