import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../core/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {
  quizes;
  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
    this.quizService.getAllQuizes().subscribe(res => {
      this.quizes = res;
    });
  }
}


