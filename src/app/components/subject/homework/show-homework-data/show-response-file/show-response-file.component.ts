import { Component, Input } from '@angular/core';
import { MainService } from '../../../../../core/services/main.service';
import { ClassService } from '../../../../../core/services/class.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Response } from '../../../../../core/models/Response';

@Component({
  selector: 'app-show-response-file',
  templateUrl: './show-response-file.component.html',
  styleUrls: ['./show-response-file.component.scss']
})
export class ShowResponseFileComponent {
  @Input() set responseSet(res) {
    this.response = res;
  }
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

  getSrc(i) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.src[i]);
  }

  openWindow(i) {
    this.downloadFile(this.src[i], this.names[i]);
  }

  downloadFile(url, fileName) {
    const file = fileName.split('.');
    const fileExtension = file[file.length - 1];
    const finalFileName = this.buildFinalFileName(fileExtension);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = finalFileName;
    a.click();
    window.URL.revokeObjectURL(fileName);
  }

  buildFinalFileName(fileExtension) {
    return (
      this.response.homeworkName      + '_' +
      this.response.senderSurname     + '_' +
      this.response.senderName        + '.' +
      fileExtension
      );
  }

  downloadAllFiles() {
    for (const responseFileID of this.response.files) {
      const fileData = {
        homeworkID: this.response.homeworkID,
        classID: this.main.currentClassrom.id,
        subjectID: this.main.currentSubject.id,
        fileID: responseFileID
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
