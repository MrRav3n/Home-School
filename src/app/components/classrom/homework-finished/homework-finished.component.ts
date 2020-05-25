import { Component, Input, OnInit } from '@angular/core';
import { Homework } from '../../../core/modals/Homework';
import * as moment from 'moment';
import { MainService } from '../../../core/main/main.service';
import { SharedService } from '../../../core/shared/shared.service';
import { Response } from '../../../core/modals/Response';
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
  text = '';
  allResponses: [Response];
  @Input() set homeworkSet(hom) {
    this.homework = hom;

    this.startTime = moment(this.homework.createDate).format('YYYY-MM-DD HH:mm:ss');

    this.endTime = moment(this.homework.endDate).format('YYYY-MM-DD HH:mm:ss');

    this.sendTime = moment(this.homework.createDate).format('YYYY-MM-DD HH:mm:ss');
    this.allResponses = this.homework.responses;
  }
  @Input() set iteratorSet(iter: number) {
    this.iterator = iter;
  }

  constructor(
    public main: MainService,
    private classService: ClassService,
    private shared: SharedService,
  ) {}

  ngOnInit(): void {

    this.shared.openHomework.subscribe(res => {
      if (res.mark) {
        for (let i = 0; i < this.allResponses.length; i++) {
          if (this.allResponses[i].id === res.id) {
            this.allResponses[i].mark = res.mark;
            this.filter();
            break;
          }
        }
      }
    });
  }

  filter() {
    this.homework.responses = this.allResponses.filter(v => {
      return (
        v.senderName.toLocaleLowerCase().includes(this.text.toLocaleLowerCase()) ||
        v.senderSurname.toLocaleLowerCase().includes(this.text.toLocaleLowerCase())
      );
    }) as [Response];
  }
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
  deleteHomework() {
    const bodyToSend = {
      classID: this.main.currentClassrom.id,
      homeworkID: this.homework.id,
      subjectID: this.main.currentSubject.id,
    };
    this.classService.deleteHomework(bodyToSend);
  }
  openHomeworkModal(response) {
    response.homeworkID = this.homework.id;
    response.singleHomework = true;
    this.shared.openHomeworkModal(response);
  }


}
