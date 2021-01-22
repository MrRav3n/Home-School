import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from '../../../../core/main/main.service';
import { ClassService } from '../../../../core/classService/class.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../../core/shared/shared.service';
import { map } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';
import { Homework } from '../../../../core/models/Homework';

@Component({
  selector: 'app-add-homework-response',
  templateUrl: './add-homework-response.component.html',
  styleUrls: ['./add-homework-response.component.scss']
})
export class AddHomeworkResponseComponent {
  @Input() set  homeworkSet(homework) {
    this.homework = homework;
  }
  homework: Homework;
  homeworkResponseForm: FormGroup;
  uploadForm: FormGroup;
  files = [];
  filesID = [];
  linksIterator = [];
  linkHrefs = [];
  constructor(
    private main: MainService,
    private classService: ClassService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private shared: SharedService
  ) {
    this.homeworkResponseForm = new FormGroup({
      description: new FormControl(''),
      classID: new FormControl(this.main.currentClassrom.id),
    });
    this.uploadForm = new FormGroup({
      profile: new FormControl(''),
    });
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
    ).subscribe();
  }

  addNewResponse() {
    this.homeworkResponseForm.addControl('homeworkID', new FormControl(this.homework.id));
    const body = this.homeworkResponseForm.value;
    body.filesID = this.filesID;
    body.linkHrefs = this.linkHrefs;
    if (this.homeworkResponseForm.valid) {
      this.classService.addNewResponse(body).subscribe(res => {
        this.shared.switchHomeworkEmit(res.responseObj.homeworkID);
        this.linksIterator = [];
        this.linkHrefs = [];
        this.files = [];
        this.filesID = [];
        this.main.currentSubject.homeworks.filter(v => v.id === res.responseObj.homeworkID).map(v => v.responses.push(res.responseObj));
        this.toastr.success('Pomyślnie dodano odpowiedź.', 'Udało się!');
      });
    }
  }

  addLink() {
    this.linksIterator.push(this.linksIterator.length);
  }
}
