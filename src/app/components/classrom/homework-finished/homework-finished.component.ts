import { Component, Input, OnInit } from '@angular/core';
import { Homework } from '../../../core/modals/Homework';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';
import { SharedService } from '../../../core/shared/shared.service';
import { Response } from '../../../core/modals/Response';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-homework-finished',
  templateUrl: './homework-finished.component.html',
  styleUrls: ['./homework-finished.component.scss']
})
export class HomeworkFinishedComponent implements OnInit {
  homework: Homework;
  iterator: number;
  clickedStatus = false;
  startTime: string;
  endTime: string;
  sendTime: string;
  text: string;
  allResponses: [Response];
  @Input() set homeworkSet(hom) {
    this.homework = hom;
    // @ts-ignore
    this.startTime = moment(this.homework.createDate)._d.toLocaleString();
    // @ts-ignore
    this.endTime = moment(this.homework.endDate)._d.toLocaleString();
    // @ts-ignore
    this.sendTime = moment(this.homework.recreateDate)._d.toLocaleString();
    this.allResponses = this.homework.responses;
  }
  @Input() set iteratorSet(iter: number) {
    this.iterator = iter;
  }
  filter() {
    this.homework.responses = this.allResponses.filter(v => {
      return (v.senderName.includes(this.text) || v.senderSurname.includes(this.text));
    }) as [Response];
  }
  constructor(
    public main: MainService,
    private shared: SharedService,
  ) {}
  addFocusClass() {
    if (this.clickedStatus) {
      setTimeout(() => this.clickedStatus = !this.clickedStatus, 400);
    } else {
      this.clickedStatus = !this.clickedStatus;
    }
  }
  showGrades() {
    this.shared.openMarksListModal(this.allResponses);
  }
  openHomeworkModal(response) {
    response.homeworkID = this.homework.id;
    response.singleHomework = true;
    this.shared.openHomeworkModal(response);
  }

  ngOnInit(): void {
  }

}
