import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Homework } from '../../../core/modals/Homework';
import * as moment from 'moment';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Mimes } from '../../../core/modals/mimeTypes';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';

declare var jQuery: any;
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
  files = [];
  filesID = [];
  uploadForm: FormGroup;
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
    private classService: ClassService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService
  ) {
    this.homeworkResponseForm = new FormGroup({
      description: new FormControl(''),
      classID: new FormControl(this.main.currentClassrom.id),
    });
    this.uploadForm = new FormGroup({
      profile: new FormControl(''),
    });
  }
  addFocusClass() {
    if (this.clickedStatus) {
      setTimeout(() => this.clickedStatus = !this.clickedStatus, 400);
    } else {
      this.clickedStatus = !this.clickedStatus;
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
    this.classService.addNewFileToResponse(this.main.currentClassrom.id, this.homework.id, formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const index = this.files.findIndex(v => v.name === file.name);
            this.files[index].progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            this.filesID.push(event.body.fileID);
            console.log(event.body.fileID);
            break;
        }
      }),
    ).subscribe();
  }
  ngOnInit(): void {
  }
  addNewResponse() {
    this.homeworkResponseForm.addControl('homeworkID', new FormControl(this.homework.id));
    const body = this.homeworkResponseForm.value;
    body.filesID = this.filesID;
    body.linkHrefs = [];
    if (!this.homeworkResponseForm.valid) {
      this.classService.addNewResponse(body).subscribe(res => {
        this.toastr.success('Pomyślnie dodano odpowiedź.', 'Udało się!');
      });
    }
  }
}
