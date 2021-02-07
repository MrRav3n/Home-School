import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var jQuery: any;

@Component({
  selector: 'app-add-new-quiz',
  templateUrl: './add-new-quiz.component.html',
  styleUrls: ['./add-new-quiz.component.scss']
})
export class AddNewQuizComponent implements OnInit {
  @ViewChild('startDate') startDate;
  @ViewChild('finishDate') finishDate;
  quizForm: FormGroup;
  submitted = false;

  constructor() {
    this.quizForm = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        startDate: new FormControl('', Validators.required),
        finishDate: new FormControl('', Validators.required),
      });
  }

  ngOnInit(): void {
    this.addDateTimePickers();
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
    return;
  }

  addQuestion() {

  }
}
