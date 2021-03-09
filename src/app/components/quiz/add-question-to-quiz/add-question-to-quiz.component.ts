import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-add-question-to-quiz',
  templateUrl: './add-question-to-quiz.component.html',
  styleUrls: ['./add-question-to-quiz.component.scss']
})

export class AddQuestionToQuizComponent implements OnInit {
  @Output() question = new EventEmitter();
  questionForm: FormGroup;
  submitted = false;
  formConfirmed = false;

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      question: new FormControl('', Validators.required),
      correctAnswer: new FormControl('', Validators.required),
      incorrectAnswer1: new FormControl('', Validators.required),
      incorrectAnswer2: new FormControl('', Validators.required),
      incorrectAnswer3: new FormControl('', Validators.required),
    });
  }

  addNewQuestion() {
    this.submitted = true;
    if (this.questionForm.valid) {
      this.formConfirmed = true;
      this.question.emit(this.questionForm.value);
    }
  }

}
