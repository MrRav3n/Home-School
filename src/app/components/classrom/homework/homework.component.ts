import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Homework } from '../../../core/modals/Homework';
import * as moment from 'moment';
@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  homework: Homework;
  homeworkResponseForm: FormGroup;
  iterator: number;
  clickedStatus = false;

  @Input() set homeworkSet(hom) {
    this.homework = hom;
    // @ts-ignore
    this.homework.createDate = moment(this.homework.createDate)._d.toLocaleString();
    // @ts-ignore
    this.homework.endDate = moment(this.homework.endDate)._d.toLocaleString();
    console.log(this.homework.createDate, this.homework.endDate);
    console.log(this.homework.createDate < this.homework.endDate);
  }
  @Input() set iteratorSet(iter: number) {
    this.iterator = iter;
  }

  constructor() {
    this.homeworkResponseForm = new FormGroup({
    });
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
  addNewResponse() {
    if (this.homeworkResponseForm.valid) {

    }
  }
}
