import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../core/classService/class.service';
import { MainService } from '../../../core/main/main.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Classrom } from '../../../core/models/Classrom';

@Component({
  selector: 'app-new-classrom',
  templateUrl: './new-classrom.component.html',
  styleUrls: ['./new-classrom.component.scss']
})
export class NewClassromComponent implements OnInit {
  addClassromForm: FormGroup;
  addSubjectForm: FormGroup;
  deleteSubjectForm: FormGroup;
  submittedFirstPart = false;
  submittedSecondPart = false;
  classrom: Classrom;
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
    this.deleteSubjectForm = new FormGroup({
      classID: new FormControl('', [Validators.required, Validators.minLength(22)]),
      subjectID: new FormControl('', Validators.required),
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
    this.deleteSubjectForm.get('classID').valueChanges.subscribe(val => {
      this.classrom = this.main.classrom.find(v => v.id === val);
    });
  }
  deleteSubject() {
    if (this.deleteSubjectForm.valid) {
      this.classService.deleteSubject(this.deleteSubjectForm.value);
    }
  }

}
