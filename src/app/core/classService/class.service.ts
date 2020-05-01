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
      this.toastr.success('Pomyślnie utworzono nową klasę', 'Udało się!');
    });
  }
  addUserToClass(userToAdd) {
    return this.http.put(this.api + 'Class/addMember', userToAdd);
  }
  addNewHomework(homework) {
    return this.http.post<Homework>(this.api + 'Homework/create', homework).subscribe(res => {
      this.main.currentSubject.homeworks.push(res);
      this.toastr.success('Pomyślnie dodano nowe zadanie', 'Udało się!');
    });
  }
  addNewSubject(subject) {
    this.http.post<{subject: Subject}>(this.api + 'Subject/create', subject).subscribe( res => {
      this.main.classrom.filter(value => value.id = subject.classID).map(val => val.subjects.push(res.subject));
      this.toastr.success('Pomyślnie dodano nauczyciela do klasy', 'Udało się!');
    });
  }
}
