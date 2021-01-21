import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Homework } from '../../../core/models/Homework';

@Component({
  selector: 'app-show-homework-file',
  templateUrl: './show-homework-file.component.html',
  styleUrls: ['./show-homework-file.component.scss']
})
export class ShowHomeworkFileComponent implements OnInit {
  src = [];
  homework: Homework;
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
  @Input() set homeworkSet(hom) {
    this.homework = hom;
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
        subjectID: this.main.currentSubject.id,
        fileID: this.homework.files[i]
      };
      this.classService.returnFileFromHomework(fileData).subscribe((res: any) => {
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
