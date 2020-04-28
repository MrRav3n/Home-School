import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  homework;
  iterator: number;
  constructor() { }
  @Input() set homeworkSet(hom) {
    this.homework = hom;
    console.log(this.homework);
  }
  @Input() set iteratorSet(iter: number) {
    this.iterator = iter;
  }
  ngOnInit(): void {
  }

}
