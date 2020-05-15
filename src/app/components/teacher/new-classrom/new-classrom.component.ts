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
  submittedFirstPart = false;
  submittedSecondPart = false;
  constructor(
    private classService: ClassService,
    private toastr: ToastrService,
    public main: MainService,
  ) {
    this.addClassromForm = new FormGroup({
      className: new FormControl('', [Validators.required]),
      schoolName: new FormControl('', [Validators.required]),
    });
    this.addSubjectForm = new FormGroup({
      userToAddEmail: new FormControl('', [Validators.required, Validators.email]),
      classID: new FormControl('', [Validators.required, Validators.minLength(22)]),
      subjectName: new FormControl('', Validators.required),
    });
  }
  addNewClass() {
    this.submittedFirstPart = true;
    if (this.addClassromForm.valid) {
      this.classService.addNewClass(this.addClassromForm.value);
    }
  }

  addNewSubject() {
    this.submittedSecondPart = true;
    if (this.addSubjectForm.valid) {
      this.classService.addNewSubject(this.addSubjectForm.value);
    }
  }
  ngOnInit(): void {
  }

}
