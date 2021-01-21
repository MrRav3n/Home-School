import { Component, OnInit, ViewChild } from '@angular/core';
import { Response } from '../../../core/models/Response';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../../../core/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';

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

