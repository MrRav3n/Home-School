import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Homework } from '../../../core/modals/Homework';
import * as moment from 'moment';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';
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
  startTime: string;
  endTime: string;
  leftHours: number;
  leftMinutes: number;
  @Input() set homeworkSet(hom) {
    this.homework = hom;
    const endDate = moment(this.homework.endDate);
    const currentTime = moment();
    const timeLeft = endDate.diff(currentTime, 'minutes');
    this.leftHours = Math.floor(timeLeft / 60);
    this.leftMinutes = Math.floor(timeLeft - (this.leftHours * 60 ));
    // @ts-ignore
    this.startTime = moment(this.homework.createDate)._d.toLocaleString();
    // @ts-ignore
    this.endTime = moment(this.homework.endDate)._d.toLocaleString();
  }
  @Input() set iteratorSet(iter: number) {
    this.iterator = iter;
  }

  constructor(
    private main: MainService,
    private classService: ClassService
  ) {
    this.homeworkResponseForm = new FormGroup({
      description: new FormControl(''),
      classID: new FormControl(this.main.currentClassrom.id),

    });
  }
  downloadAllFiles() {
    const fileData = {homeworkID: this.homework.id,
      classID: this.main.currentClassrom.id,
      fileID: this.homework.files[0]};
    console.log(fileData);
    this.classService.returnFileFromHomework(fileData).subscribe(res => {
      console.log('Working!');
      console.log(res.body);
      const type = res.headers.get('Content-Type');
      console.log(type);
      const file = new Blob([res.body],
        { type });
      console.log(file);
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
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
    this.homeworkResponseForm.addControl('homeworkID', new FormControl(this.homework.id));
    if (this.homeworkResponseForm.valid) {
      this.classService.addNewResponse(this.homeworkResponseForm.value);

    }
  }
}
