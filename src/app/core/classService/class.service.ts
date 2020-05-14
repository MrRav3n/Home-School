import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main/main.service';
import { Homework } from '../modals/Homework';
import { Observable } from 'rxjs';
import { Classrom } from '../modals/Classrom';
import { Subject } from '../modals/Subject';
import { Response } from '../modals/Response';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  api = this.shared.api;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private shared: SharedService,
    private main: MainService
  ) { }

  addNewClass(classroom) {
    this.http.post<Classrom>(this.api + 'Class/create', classroom).subscribe( res => {
      this.main.classrom.push(res);
      this.shared.openCodeModal(res.id);
      this.toastr.success('Pomyślnie utworzono nową klasę.', 'Udało się!');
    });
  }
  addNewMark(mark) {
    this.http.put(this.api + 'Mark', mark).subscribe( res => {
      this.toastr.success('Pomyślnie dodano nową ocenę.', 'Udało się!');
      this.shared.openHomeworkModal('');
    });
  }
  addUserToClass(userToAdd) {
    return this.http.put(this.api + 'Class/addMember', userToAdd);
  }
  addNewHomework(homework) {
    return this.http.post<Homework>(this.api + 'Homework/createHomework', homework).subscribe(res => {
      this.main.currentSubject.homeworks.push(res);
      this.toastr.success('Pomyślnie dodano nowe zadanie.', 'Udało się!');
    });
  }
  addNewFileToHomework(classID, fileToSend): Observable<any> {
    return this.http.post(`https://filestorage-api.azurewebsites.net/api/HomeworkFiles/uploadToHomework/${classID}`, fileToSend, {
        reportProgress: true,
        observe: 'events'
    });
  }
  returnFileFromHomework(homworkData) {
    const httpOptions = {
      responseType  : 'arraybuffer' as 'json',
      observe: 'response',
    };
    return this.http.post(`https://filestorage-api.azurewebsites.net/api/HomeworkFiles/returnFileFromHomework`, homworkData, httpOptions);
  }
  addNewFileToResponse(classID, homeworkID, fileToSend): Observable<any> {
    return this.http.post(`https://filestorage-api.azurewebsites.net/api/HomeworkFiles/uploadToResponse/${classID}/${homeworkID}`, fileToSend);
  }
  addNewResponse(response) {
    return this.http.post<Response>(this.api + 'Homework/createResponse', response).subscribe(res => {
      this.toastr.success('Pomyślnie dodano odpowiedź.', 'Udało się!');
    });
  }
  addNewSubject(subject) {
    this.http.post<{subject: Subject}>(this.api + 'Subject/create', subject).subscribe( res => {
      this.main.classrom.filter(value => value.id = subject.classID).map(val => val.subjects.push(res.subject));
      this.toastr.success('Pomyślnie dodano nauczyciela do klasy.', 'Udało się!');
    });
  }
}
