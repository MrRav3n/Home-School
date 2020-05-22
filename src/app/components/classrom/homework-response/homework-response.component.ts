import { Component, Input, OnInit } from '@angular/core';
import { Response } from '../../../core/modals/Response';

@Component({
  selector: 'app-homework-response',
  templateUrl: './homework-response.component.html',
  styleUrls: ['./homework-response.component.scss']
})
export class HomeworkResponseComponent implements OnInit {
  response: Response;
  @Input() set responseSet(response: Response)  {
    this.response = response;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
