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
  userRole;
  homeworkForm: FormGroup;
  constructor(
    public main: MainService,
    private classService: ClassService
  ) {
  }

  ngOnInit(): void {
    this.homeworkForm = new FormGroup({
      classID: new FormControl(this.main.currentClassrom.id),
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }
  addNewHomework() {
    console.log(this.homeworkForm.value);
    if (this.homeworkForm.valid) {
      this.classService.addNewHomework(this.homeworkForm.value).subscribe(res => {
        console.log(res);
      });
    }
  }

}
