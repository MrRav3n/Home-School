import { Component, Input, OnInit } from '@angular/core';
import { Homework } from '../../../core/models/Homework';
import * as moment from 'moment';
import { QuizService } from '../../../core/services/quiz.service';
import { MainService } from '../../../core/services/main.service';

@Component({
  selector: 'app-single-quiz',
  templateUrl: './single-quiz.component.html',
  styleUrls: ['./single-quiz.component.scss']
})
export class SingleQuizComponent implements OnInit {
  @Input() set quizSet(quiz) {
    this.setHomeworkData(quiz);
  }
  @Input() set iteratorSet(iter: number) {
    this.iterator = iter;
  }
  quiz;
  iterator: number;
  clickedStatus = false;
  startTime;
  endTime;
  questions;
  selectedAnswers = [];
  answers;
  constructor(
    private quizService: QuizService,
    public main: MainService,
  ) { }
  setHomeworkData(hom) {
    this.quiz = hom;
    this.startTime = moment(this.quiz.startDate).format('YYYY-MM-DD HH:mm:ss');
    this.endTime = moment(this.quiz.finishDate).format('YYYY-MM-DD HH:mm:ss');
  }
  ngOnInit(): void {
  }
  addFocusClass() {
    if (this.clickedStatus) {
      setTimeout(() => this.clickedStatus = !this.clickedStatus, 400);
    } else {
      this.clickedStatus = !this.clickedStatus;
    }
  }
  startTest() {
    this.quizService.getQuizQuestions(this.quiz.id).subscribe(res => {
      this.questions = res;
      console.log(res);
    });
  }

  selectAnswer(answer: string, index: number) {
    this.selectedAnswers[index] = answer;
  }

  completeQuiz() {
    const completedQuiz = {
      quizId: this.quiz.id,
      answers: this.selectedAnswers
    };
    this.quizService.completeQuiz(completedQuiz);
  }
}
