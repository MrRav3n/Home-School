import { Component, Input, OnInit } from '@angular/core';
import { Homework } from '../../../../core/models/Homework';
import * as moment from 'moment';
import { MainService } from '../../../../core/services/main.service';
import { SharedService } from '../../../../core/services/shared.service';
import { Response } from '../../../../core/models/Response';
import { ClassService } from '../../../../core/services/class.service';

@Component({
  selector: 'app-homework-finished',
  templateUrl: './homework-finished.component.html',
  styleUrls: ['./homework-finished.component.scss']
})
export class HomeworkFinishedComponent implements OnInit {
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
  sendTime: string;
  text = '';
  allResponses: Response[];
  setHomeworkData(homework: Homework) {
    this.homework = homework;
    this.startTime = moment(homework.createDate).format('YYYY-MM-DD HH:mm:ss');
    this.endTime = moment(homework.endDate).format('YYYY-MM-DD HH:mm:ss');
    this.sendTime = moment(homework.createDate).format('YYYY-MM-DD HH:mm:ss');
    this.allResponses = homework.responses;
  }

  constructor(
    public main: MainService,
    private classService: ClassService,
    private shared: SharedService,
  ) {}

  ngOnInit(): void {
    this.shared.openHomework.subscribe(res => {
      if (!res.mark) { return; }
      for (const response of this.allResponses) {
        if (response.id === res.id) {
          response.mark = res.mark;
          this.filter();
          break;
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
