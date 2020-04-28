import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-main-teacher',
  templateUrl: './main-teacher.component.html',
  styleUrls: ['./main-teacher.component.scss']
})
export class MainTeacherComponent implements OnInit {
  constructor(
    public main: MainService
  ) { }

  ngOnInit(): void {

  }

}
