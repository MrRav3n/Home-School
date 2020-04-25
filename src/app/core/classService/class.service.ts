import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  api = this.shared.api;
  constructor(
    private http: HttpClient,
    private shared: SharedService,
  ) { }

  addNewClass(classroom) {
    return this.http.post(this.api + 'Class/createClass', classroom);
  }
  addUserToClass(userToAdd) {
    return this.http.put(this.api + 'Class/addMemberToClass', userToAdd);
  }
  addNewHomework(homework) {
    return this.http.post(this.api + 'Homework/add', homework);
  }
  addNewSubject(subject) {
    return this.http.post(this.api + 'Subject/add', subject);
  }
}
