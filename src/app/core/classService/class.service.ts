import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main/main.service';
import { Homework } from '../models/Homework';
import { Observable } from 'rxjs';
import { Classrom } from '../models/Classrom';
import { Subject } from '../models/Subject';
import { Response } from '../models/Response';

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
  addNewMark(mark): Observable<any> {
    return this.http.put(this.api + 'Mark', mark);
  }
  addUserToClass(userToAdd) {
    return this.http.put(this.api + 'Class/addMember', userToAdd);
  }
  addNewHomework(homework) {
    return this.http.post<Homework>(this.api + 'Homework/createHomework', homework);
  }

  returnFileFromHomework(homworkData) {
    const httpOptions = {
      responseType  : 'arraybuffer' as 'json',
      observe: 'response',
    };
    // @ts-ignore
    return this.http.post(`${this.shared.apiFiles}HomeworkFiles/returnFileFromHomework`, homworkData, httpOptions);
  }
  returnClassromNames(classId) {
    return this.http.post(`${this.shared.apiNames}ReturnNames`, classId);
  }
  returnFileFromResponse(responseData) {
    const httpOptions = {
      responseType  : 'arraybuffer' as 'json',
      observe: 'response',
    };
    // @ts-ignore
    return this.http.post(`${this.shared.apiFiles}HomeworkFiles/returnFileFromResponse`, responseData, httpOptions);
  }
  addNewFileToResponse(classID, homeworkID, fileToSend): Observable<any> {
    return this.http.post(`${this.shared.apiFiles}HomeworkFiles/uploadToResponse/${classID}/${homeworkID}`, fileToSend, {
      reportProgress: true,
      observe: 'events'
    });
  }
  addNewFileToHomework(classID: string, subjectID: string, fileToSend): Observable<any> {
    return this.http.post(`${this.shared.apiFiles}HomeworkFiles/uploadToHomework/${classID}/${subjectID}`, fileToSend, {
      reportProgress: true,
      observe: 'events'
    });
  }
  addNewResponse(response): Observable<any> {
    return this.http.post<any>(this.api + 'Homework/createResponse', response);
  }
  addNewSubject(subject) {
    this.http.post<{subject: Subject}>(this.api + 'Subject/create', subject).subscribe( res => {
      this.main.classrom.filter(value => value.id === subject.classID).map(val => val.subjects.push(res.subject));
      this.toastr.success('Pomyślnie dodano nauczyciela do klasy.', 'Udało się!');
    });
  }
  deleteHomework(homework) {
    return this.http.put(this.api + 'Homework/deleteHomework', homework).subscribe(res => {
      this.toastr.success('Usunięto zadanie.', 'Udało się!');
    });
  }
  deleteClassMember(member) {
    return this.http.put(this.api + 'Class/deleteMember', member).subscribe(res => {
      this.toastr.success('Usunięto użytkownika.', 'Udało się!');
    });
  }
  showClassromMembers(classID) {
    return this.http.post(this.shared.apiNames + 'ReturnNames', classID);
  }
  deleteSubject(subject) {
    return this.http.put(this.api + 'Class/deleteSubject', subject).subscribe(res => {
      this.toastr.success('Usunięto zadanie.', 'Udało się!');
    });
  }
}
