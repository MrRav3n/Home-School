import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Homework } from '../../../core/modals/Homework';
import { Response } from '../../../core/modals/Response';

@Component({
  selector: 'app-show-response-file',
  templateUrl: './show-response-file.component.html',
  styleUrls: ['./show-response-file.component.scss']
})
export class ShowResponseFileComponent implements OnInit {
  src = [];
  response: Response;
  names = [];
  mimes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/jpg',
  ];
  files = [];
  filesID = [];
  constructor(
    private main: MainService,
    private classService: ClassService,
    private sanitizer: DomSanitizer,
  ) { }
  @Input() set responseSet(res) {
    this.response = res;
  }
  ngOnInit(): void {
  }
  getSrc(i) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.src[i]);
  }
  openWindow(i) {
    this.downloadFile(this.src[i], this.names[i]);
  }
  downloadFile(url, fileName) {
    const file = fileName.split('.');
    const finalFileName = this.response.homeworkName + '_' + this.response.senderSurname + '_' + this.response.senderName + '.' + file[file.length - 1];
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
    for(let i = 0; i < this.response.files.length; i++) {
      const fileData = {
        homeworkID: this.response.homeworkID,
        classID: this.main.currentClassrom.id,
        subjectID: this.main.currentSubject.id,
        fileID: this.response.files[i]
      };
      this.classService.returnFileFromResponse(fileData).subscribe(res => {
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
}
