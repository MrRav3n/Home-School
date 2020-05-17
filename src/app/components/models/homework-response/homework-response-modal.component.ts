import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from '../../../core/modals/Response';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from '../../../core/main/main.service';
import { ClassService } from '../../../core/classService/class.service';

@Component({
  selector: 'app-homework-response-modal',
  templateUrl: './homework-response-modal.component.html',
  styleUrls: ['./homework-response-modal.component.scss']
})
export class HomeworkResponseModalComponent implements OnInit {
  @ViewChild('showHomework') showHomework;
  response: Response;
  markForm: FormGroup;
  constructor(
    private shared: SharedService,
    private toastr: ToastrService,
    private main: MainService,
    private classService: ClassService
  ) {
    this.markForm = new FormGroup({
      mark: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.shared.openHomework.subscribe(res => {
      this.response = res;
      console.log(res);
      this.showHomework.nativeElement.click();
    });
  }
  addMark() {
    this.markForm.addControl('responseID', new FormControl(this.response.id));
    this.markForm.addControl('homeworkID', new FormControl(this.response.homeworkID));
    this.markForm.addControl('classID', new FormControl(this.main.currentClassrom.id));
    this.markForm.addControl('subjectID', new FormControl(this.main.currentSubject.id));
    if (this.markForm.valid) {
      this.classService.addNewMark(this.markForm.value);
    }
  }

}
