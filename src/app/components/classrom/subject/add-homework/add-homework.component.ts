import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';
import { MainService } from '../../../../core/main/main.service';
import { ClassService } from '../../../../core/classService/class.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../../../core/shared/shared.service';
import { Homework } from '../../../../core/models/Homework';
declare var jQuery: any;
@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.component.html',
  styleUrls: ['./add-homework.component.scss']
})
export class AddHomeworkComponent implements OnInit {
  @ViewChild('timeValue') timeValue;
  @Output() newHomework: EventEmitter<Homework> = new EventEmitter<Homework>();
  homeworkForm: FormGroup;
  submitted = false;
  uploadFileForm: FormGroup;
  uploadedFiles = [];
  uploadedFilesId = [];
  uploadedLinks = [];
  uploadedLinksIterator = [];

  constructor(
    public main: MainService,
    private classService: ClassService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.addDateTimePicker();
    this.homeworkForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      time: new FormControl('', Validators.required),
    });
    this.uploadFileForm = new FormGroup({
      profile: new FormControl(''),
    });
  }
  addDateTimePicker() {
    (($) => {
      $(document).ready(() => {
        $('#picker').dateTimePicker();
      });
    })(jQuery);
  }
  addNewHomework() {
    this.submitted = true;
    const timeUtc = moment(this.timeValue.nativeElement.value).toISOString();
    this.homeworkForm.patchValue({time: timeUtc});
    const bodyToSend = this.homeworkForm.value;
    bodyToSend.filesID = this.uploadedFilesId;
    bodyToSend.linkHrefs = this.uploadedLinks;
    bodyToSend.subjectID = this.main.currentSubject.id;
    bodyToSend.classID = this.main.currentClassrom.id;

    if (this.homeworkForm.valid) {
      this.classService.addNewHomework(bodyToSend).subscribe(res => {
        this.submitted = false ;
        this.homeworkForm.reset();
        this.uploadedFiles = [];
        this.uploadedLinksIterator = [];
        this.uploadedLinks = [];
        this.uploadedFilesId = [];
        this.emitNewHomework(res);
        this.main.currentSubject.homeworks.push(res);
        this.toastr.success('Pomyślnie dodano nowe zadanie.', 'Udało się!');
      });

    }
  }
  uploadFile() {
    const formData = new FormData();
    const file = this.uploadFileForm.get('profile').value;
    this.uploadedFiles.push(file);
    formData.append('file', file);
    file.inProgress = true;
    this.classService.addNewFileToHomework(this.main.currentClassrom.id, this.main.currentSubject.id, formData).pipe(
      map(event => {
        const index = this.uploadedFiles.findIndex(v => v.name === file.name);
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.uploadedFiles[index].progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            this.uploadedFiles[index].finished = true;
            this.uploadedFilesId.push(event.body.fileID);
            break;
        }
      }),
    ).subscribe(res => {});
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadFileForm.get('profile').setValue(file);
      this.uploadFile();
    }
  }
  addLink() {
    this.uploadedLinksIterator.push(this.uploadedLinksIterator.length);
  }
  emitNewHomework(homework: Homework) {
    this.newHomework.emit(homework);
  }

}
