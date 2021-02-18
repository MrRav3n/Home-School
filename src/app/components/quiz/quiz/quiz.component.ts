import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../core/services/quiz.service';
import { MainService } from '../../../core/services/main.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(
    private quizService: QuizService,
    private main: MainService,
  ) { }

  ngOnInit(): void {
  }

}
