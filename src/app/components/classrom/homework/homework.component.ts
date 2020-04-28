import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  homework;
  homeworkResponseForm: FormGroup;
  iterator: number;
  clickedStatus = false;

  @Input() set homeworkSet(hom) {
    this.homework = hom;
    console.log(this.homework);
  }
  @Input() set iteratorSet(iter: number) {
    this.iterator = iter;
  }

  constructor() {
    this.homeworkResponseForm = new FormGroup({
    });
  }
  addFocusClass() {
    if (this.clickedStatus) {
      setTimeout(() => this.clickedStatus = !this.clickedStatus, 400);
    } else {
      this.clickedStatus = !this.clickedStatus;
    }

  }
  ngOnInit(): void {
  }
  addNewResponse() {
    if (this.homeworkResponseForm.valid) {

    }
  }
}
