import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../../core/services/main.service';
import { QuizService } from '../../../core/services/quiz.service';
import * as moment from 'moment';
declare var jQuery: any;

@Component({
  selector: 'app-add-new-quiz',
  templateUrl: './add-new-quiz.component.html',
  styleUrls: ['./add-new-quiz.component.scss']
})
export class AddNewQuizComponent implements OnInit {
  @ViewChild('startDate') startDate;
  @ViewChild('finishDate') finishDate;
  quizQuestionsCount = [];
  quizForm: FormGroup;
  submitted = false;
  questions = [];
  showAddQuestion = false;
  constructor(
    private main: MainService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.addDateTimePickers();
    this.quizForm = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        startDate: new FormControl('', Validators.required),
        finishDate: new FormControl('', Validators.required),
        classID: new FormControl(this.main.currentClassrom.id),
        subjectID: new FormControl(this.main.currentSubject.id),
      });
  }

  addDateTimePickers() {
    (($) => {
      $(document).ready(() => {
        $('#startDatePicker').dateTimePicker();
        $('#finishDatePicker').dateTimePicker();
      });
    })(jQuery);
  }

  addNewHomework() {
    this.submitted = true;
    const startDate = moment(this.startDate.nativeElement.value).toISOString();
    this.quizForm.patchValue({startDate});
    const finishDate = moment(this.finishDate.nativeElement.value).toISOString();
    this.quizForm.patchValue({finishDate});
    if (this.quizForm.valid) {
      this.quizForm.addControl('questions', new FormControl(this.questions));
      this.quizService.createQuiz(this.quizForm.value);
      this.quizForm.reset();
      this.questions = [];
    }
    return;
  }

  addQuestion() {
    this.showAddQuestion = true;
  }
  addQuestionToQuiz(question) {
    if (question) {
      this.questions.push(question);
      this.showAddQuestion = false;
    }
  }
}
