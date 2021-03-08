import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../core/services/quiz.service';
import { MainService } from '../../../core/services/main.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizes;
  constructor(
    private quizService: QuizService,
    private main: MainService,
  ) { }

  ngOnInit(): void {
    this.quizService.getAllQuizes().subscribe(res => {
      console.log(res);
      this.quizes = res;
    });
  }
}


