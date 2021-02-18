import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';

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
  getAllQuizes() {
    this.http.get(this.api + `Quizes/getAllQuizes/${this.main.currentClassrom}/${this.main.currentSubject}`).subscribe( res => {
      this.toastr.success('Pomyślnie dodano nowy quiz', 'Udało się!');
    });
  }

  getQuizQuestions(quizID) {
    this.http.get(this.api + `Quizes/getAllQuizes/${this.main.currentClassrom}/${quizID}`).subscribe( res => {
      this.toastr.success('Pomyślnie dodano nowy quiz', 'Udało się!');
    });
  }

  getQUizAnswers(quizID) {
    this.http.get(this.api + `Quizes/getQuizAnswers/${this.main.currentClassrom}/${quizID}`).subscribe( res => {
      this.toastr.success('Pomyślnie dodano nowy quiz', 'Udało się!');
    });
  }

  completeQuiz(answers) {
    this.http.post(this.api + 'Quizes/completeQuiz', answers).subscribe( () => {
      this.toastr.success('Pomyślnie zakończono quiz', 'Udało się!');
    });
  }
}
