import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../core/classService/class.service';
declare var jQuery: any;
import * as moment from 'moment';
import { Homework } from '../../../core/modals/Homework';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  userRole;
  homeworkForm: FormGroup;
  currentHomeworks = [];
  finishedHomeworks = [];
  whichHomeworks = true;
  @ViewChild('timeValue') timeValue;
  constructor(
    public main: MainService,
    private classService: ClassService,
  ) {
    this.homeworkForm = new FormGroup({
      classID: new FormControl(this.main.currentClassrom.id),
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }


  ngOnInit(): void {
    (($) => {
      $(document).ready(() => {
        $('#picker').dateTimePicker();
      });
    })(jQuery);
    const currentTime = moment().toISOString();
    for(let i = 0; i < this.main.currentSubject.homeworks.length; i++) {
      const currHom = this.main.currentSubject.homeworks[i];
      if (currHom.endDate > currentTime) {
        this.currentHomeworks.push(currHom);
      } else {
        this.finishedHomeworks.push(currHom);
      }
    }
  }
  createGoodTimeType(time) {

  }
  createGoodTimeForm() {}
  addNewHomework() {
    const timeNoUtc = this.timeValue.nativeElement.value;
    console.log(timeNoUtc);
    const timeUtc = moment(timeNoUtc).toISOString();
    console.log(timeUtc);
    this.homeworkForm.addControl('time', new FormControl(timeUtc));
    if (this.homeworkForm.valid) {
      this.classService.addNewHomework(this.homeworkForm.value);
    }
  }

}
