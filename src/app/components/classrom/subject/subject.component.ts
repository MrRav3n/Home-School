import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { FormControl, FormGroup} from '@angular/forms';
import { ClassService } from '../../../core/classService/class.service';
declare var jQuery: any;
import * as moment from 'moment';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
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
  uploadForm: FormGroup;
  whichHomeworks = true;
  files = [];
  filesID = [];
  @ViewChild('timeValue') timeValue;
  constructor(
    public main: MainService,
    private classService: ClassService,
    private toastr: ToastrService
  ) {
    this.homeworkForm = new FormGroup({
      classID: new FormControl(this.main.currentClassrom.id),
      name: new FormControl(''),
      description: new FormControl(''),
      files: new FormControl(''),
    });
    this.uploadForm = new FormGroup({
      profile: new FormControl(''),
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
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadFile();
    }
  }
  uploadFile() {
    const formData = new FormData();
    const file = this.uploadForm.get('profile').value;
    this.files.push(file);
    formData.append('file', file);
    file.inProgress = true;
    this.classService.addNewFileToHomework(this.main.currentClassrom.id, formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const index = this.files.findIndex(v => v.name === file.name);
            this.files[index].progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            this.filesID.push(event.body.fileID);
            break;
        }
      }),
      ).subscribe(res => {
    });
  }
  addNewHomework() {
    const timeUtc = moment(this.timeValue.nativeElement.value).toISOString();
    console.log(timeUtc);
    this.homeworkForm.addControl('time', new FormControl(timeUtc));
    const bodyToSend = this.homeworkForm.value;
    bodyToSend.filesID = this.filesID;
    console.log(bodyToSend);
    if (this.homeworkForm.valid) {
      this.classService.addNewHomework(bodyToSend).subscribe(res => {
        this.homeworkForm.reset();
        this.files = [];
        this.filesID = [];
        this.currentHomeworks.push(res);
        this.main.currentSubject.homeworks.push(res);
        this.toastr.success('Pomyślnie dodano nowe zadanie.', 'Udało się!');
      });

    }
  }

}
