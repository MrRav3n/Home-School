import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../core/classService/class.service';
import { MainService } from '../../../core/main/main.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-classrom',
  templateUrl: './new-classrom.component.html',
  styleUrls: ['./new-classrom.component.scss']
})
export class NewClassromComponent implements OnInit {
  addClassromForm: FormGroup;
  addSubjectForm: FormGroup;
  constructor(
    private classService: ClassService,
    private toastr: ToastrService,
    public main: MainService,
  ) {
    this.addClassromForm = new FormGroup({
      className: new FormControl(''),
      schoolName: new FormControl(''),
    });
    this.addSubjectForm = new FormGroup({
      userToAddEmail: new FormControl('', Validators.required),
      classID: new FormControl('', Validators.required),
      subjectName: new FormControl('', Validators.required),
    });
  }
  addNewClass() {
    if (this.addClassromForm.valid) {
      this.classService.addNewClass(this.addClassromForm.value);
    }
  }

  addNewSubject() {
    if (this.addSubjectForm.valid) {
      this.classService.addNewSubject(this.addSubjectForm.value);
    }
  }
  ngOnInit(): void {
  }

}
