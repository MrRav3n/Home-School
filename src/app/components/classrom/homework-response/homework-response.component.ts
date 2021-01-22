import { Component, Input, OnInit } from '@angular/core';
import { Response } from '../../../core/models/Response';

@Component({
  selector: 'app-homework-response',
  templateUrl: './homework-response.component.html',
  styleUrls: ['./homework-response.component.scss']
})
export class HomeworkResponseComponent {
  response: Response;
  @Input() set responseSet(response: Response)  {
    this.response = response;
  }
}
