import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassService } from '../../../core/classService/class.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  subject;
  userRole;
  homeworkForm: FormGroup;
  constructor(
    public main: MainService,
    private classService: ClassService
  ) {
    this.homeworkForm = new FormGroup({
      classID: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }
  addNewHomework() {
    if (this.homeworkForm.valid) {
      this.classService.addNewHomework(this.homeworkForm.value).subscribe(res => {
        console.log(res);
      });
    }
  }

}
