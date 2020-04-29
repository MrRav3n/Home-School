import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  api = this.shared.api;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private shared: SharedService,
  ) { }

  addNewClass(classroom) {
    this.http.post(this.api + 'Class/createClass', classroom).subscribe( res => {
      this.toastr.success('Pomyślnie utworzono nową klasę', 'Udało się!');
    });
  }
  addUserToClass(userToAdd) {
    return this.http.put(this.api + 'Class/addMemberToClass', userToAdd);
  }
  addNewHomework(homework) {
    return this.http.post(this.api + 'Homework/add', homework).subscribe(res => {
      this.toastr.success('Pomyślnie dodano nowe zadanie', 'Udało się!');
    });
  }
  addNewSubject(subject) {
    this.http.post(this.api + 'Subject/add', subject).subscribe( res => {
      this.toastr.success('Pomyślnie dodano nauczyciela do klasy', 'Udało się!');
    });
  }
}
