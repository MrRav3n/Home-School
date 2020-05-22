import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../core/classService/class.service';
declare var jQuery: any;
import { Location } from '@angular/common';
import * as moment from 'moment';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
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
  whichHomeworks = 1;
  showChat = false;
  files = [];
  filesID = [];
  linksHrefs = [];
  submitted = false;
  currentTime;
  @Input() set currentSubSet(sub) {
    this.showChat = false;
    this.sortHomeworks(this.currentTime);
  }
  @ViewChild('timeValue') timeValue;
  constructor(
    public main: MainService,
    private classService: ClassService,
    private toastr: ToastrService,
    private router: Router,
    private location: Location
  ) {
    this.homeworkForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      time: new FormControl('', Validators.required),

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
    if (!this.main.currentSubject || this.main.currentClassrom) {
      this.main.currentClassrom = this.main.classrom[0];
      this.main.currentSubject = this.main.currentClassrom.subjects[0];
      // this.router.navigateByUrl('classrom/0');
    }
    this.currentTime = moment().toISOString();
    this.sortHomeworks(this.currentTime);

  }
  goBack() {
    this.location.back();
  }
  sortHomeworks(currentTime) {
    this.currentHomeworks = [];
    this.finishedHomeworks = [];
    for (let i = 0; i < this.main.currentSubject.homeworks.length; i++) {
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
      this.uploadForm.get('profile').setValue(file);
      this.uploadFile();
    }
  }
  uploadFile() {
    const formData = new FormData();
    const file = this.uploadForm.get('profile').value;
    this.files.push(file);
    formData.append('file', file);
    file.inProgress = true;
    this.classService.addNewFileToHomework(this.main.currentClassrom.id, this.main.currentSubject.id, formData).pipe(
      map(event => {
        const index = this.files.findIndex(v => v.name === file.name);
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.files[index].progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            this.files[index].finished = true;
            this.filesID.push(event.body.fileID);
            break;
        }
      }),
    ).subscribe(res => {});
  }
  addNewHomework() {
    this.submitted = true;
    const timeUtc = moment(this.timeValue.nativeElement.value).toISOString();
    this.homeworkForm.patchValue({time: timeUtc});
    const bodyToSend = this.homeworkForm.value;
    bodyToSend.filesID = this.filesID;
    bodyToSend.linkHrefs = this.linksHrefs;
    bodyToSend.subjectID = this.main.currentSubject.id;
    bodyToSend.classID = this.main.currentClassrom.id;
    console.log(bodyToSend);
    if (this.homeworkForm.valid) {
      this.classService.addNewHomework(bodyToSend).subscribe(res => {
        this.submitted = false  ;
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
