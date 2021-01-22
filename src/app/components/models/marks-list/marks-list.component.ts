import { Component, OnInit, ViewChild } from '@angular/core';
import { Response } from '../../../core/models/Response';
import { SharedService } from '../../../core/shared/shared.service';

@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.scss']
})
export class MarksListComponent implements OnInit  {
  @ViewChild('showMarksList') showMarksList;
  response: [Response];
  constructor(
    private shared: SharedService,
  ) {}

  ngOnInit(): void {
    this.shared.openMarksList.subscribe(res => {
      this.response = res;
      this.showMarksList.nativeElement.click()
    });
  }
}

