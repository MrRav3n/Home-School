import { Component, Input, OnInit } from '@angular/core';
import { Homework } from '../../../core/modals/Homework';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';

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
  @Input() set homeworkSet(hom) {
    this.homework = hom;
    // @ts-ignore
    this.startTime = moment(this.homework.createDate)._d.toLocaleString();
    // @ts-ignore
    this.endTime = moment(this.homework.endDate)._d.toLocaleString();
    // @ts-ignore
    this.sendTime = moment(this.homework.recreateDate)._d.toLocaleString();
  }
  @Input() set iteratorSet(iter: number) {
    this.iterator = iter;
  }

  constructor(
    private main: MainService,
    private classService: ClassService
  ) {}
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
