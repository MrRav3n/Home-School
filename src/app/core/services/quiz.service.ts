import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  api = this.shared.apiUrl;
  constructor(
    private shared: SharedService,
    private toastr: ToastrService,
    private http: HttpClient,
    private main: MainService
  ) { }

  createQuiz(quiz) {
    this.http.post(this.api + 'Quizes/create', quiz).subscribe( () => {
      this.toastr.success('Pomyślnie dodano nowy quiz', 'Udało się!');
    });
  }
  getAllQuizes(): Observable<any> {
    return this.http.get(this.api + `Quizes/getAllQuizes/${this.main.currentClassrom.id}/${this.main.currentSubject.id}`);
  }

  getQuizQuestions(quizID): Observable<any> {
    return this.http.get(this.api + `Quizes/getAllQuizes/${this.main.currentClassrom.id}/${quizID}`);
  }

  getQUizAnswers(quizID): Observable<any>  {
    return this.http.get(this.api + `Quizes/getQuizAnswers/${this.main.currentClassrom.id}/${quizID}`);
  }

  completeQuiz(answers) {
    answers.classId = this.main.currentClassrom.id;
    this.http.post(this.api + 'Quizes/completeQuiz', answers).subscribe( () => {
      this.toastr.success('Pomyślnie zakończono quiz', 'Udało się!');
    });
  }
}
