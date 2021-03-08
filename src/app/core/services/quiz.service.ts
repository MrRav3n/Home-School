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
    this.http.post(this.api + 'Quizes/createQuiz', quiz).subscribe( () => {
      this.toastr.success('Pomyślnie dodano nowy quiz', 'Udało się!');
    });
  }

  getAllQuizes(): Observable<any> {
    return this.http.get(this.api + `Quizes/getAllQuizesForSubject/${this.main.currentClassrom.id}/${this.main.currentSubject.id}`);
  }

  getQuizQuestions(quizID): Observable<any> {
    return this.http.get(this.api + `Quizes/getQuizQuestions/${this.main.currentClassrom.id}/${quizID}`);
  }

  getQuizAnswers(quizID): Observable<any> {
    return this.http.get(this.api + `Quizes/getAnswersForQuizId/${this.main.currentClassrom.id}/${this.main.currentSubject.id}/${quizID}`);
  }

  completeQuiz(answers): Observable<any> {
    answers.classId = this.main.currentClassrom.id;
    return this.http.post(this.api + 'Quizes/completeQuiz', answers);
  }
}
