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
      this.quizes = res.quizes;
      this.quizService.getQUizAnswers(this.quizes[0].id).subscribe(res2 => {
        console.log(res2);
      });
      console.log(res);
    });


  }


}
