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
  src = [];
  names = [];
  mimes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/jpg',
  ];
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
  getSrc(i) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.src[i]);
  }
  openWindow(i) {
    this.downloadFile(this.src[i], this.names[i]);
  }
  downloadFile(url, fileName) {
    const file = fileName.split('.');
    const finalFileName = this.homework.name + '.' + file[file.length - 1];
    const a = document.createElement('a');
    document.body.appendChild(a);
    // @ts-ignore
    a.style = 'display: none';
    a.href = url;
    a.download = finalFileName;
    a.click();
    window.URL.revokeObjectURL(fileName);
  }
  downloadAllFiles() {
    for(let i = 0; i < this.homework.files.length; i++) {
      const fileData = {
        homeworkID: this.homework.id,
        classID: this.main.currentClassrom.id,
        fileID: this.homework.files[i]
      };
      this.classService.returnFileFromHomework(fileData).subscribe(res => {
        console.log(res.headers);
        const type = res.headers.get('Content-Type');
        const fileName = res.headers.get('filename');
        this.names.push(fileName);
        const file = new Blob([res.body], {type});
        const fileURL = URL.createObjectURL(file);
        if (!this.mimes.includes(type)) {
          this.downloadFile(fileURL, fileName);
        } else {
          this.src.push(fileURL);
        }
      });
    }
  }
  addFocusClass() {
    if (this.clickedStatus) {
      setTimeout(() => this.clickedStatus = !this.clickedStatus, 400);
    } else {
      this.clickedStatus = !this.clickedStatus;
    }
  }
  onFileSelect(event) {
    console.log(event);
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
            console.log(this.files[index].progress);
            break;
          case HttpEventType.Response:
            console.log(event.body.fileID);
            this.filesID.push(event.body.fileID);
            break;
        }
      }),
    ).subscribe(res => {
    });
  }
  ngOnInit(): void {
  }
  addNewResponse() {
    this.homeworkResponseForm.addControl('homeworkID', new FormControl(this.homework.id));
    const body = this.homeworkResponseForm.value;
    body.filesID = this.filesID;
    console.log(body);
    if (!this.homeworkResponseForm.valid) {
      this.classService.addNewResponse(body).subscribe(res => {
        this.toastr.success('Pomyślnie dodano odpowiedź.', 'Udało się!');
      });
    }
  }
}
