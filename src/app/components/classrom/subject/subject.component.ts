import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { FormControl, FormGroup} from '@angular/forms';
import { ClassService } from '../../../core/classService/class.service';
declare var jQuery: any;
import * as moment from 'moment';

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

  addNewHomework() {
    const timeUtc = moment(this.timeValue.nativeElement.value).toISOString();
    this.homeworkForm.addControl('time', new FormControl(timeUtc));
    if (this.homeworkForm.valid) {
      this.classService.addNewHomework(this.homeworkForm.value);
    }
  }

}
