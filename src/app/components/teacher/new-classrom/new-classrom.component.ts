import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassService } from '../../../core/classService/class.service';

@Component({
  selector: 'app-new-classrom',
  templateUrl: './new-classrom.component.html',
  styleUrls: ['./new-classrom.component.scss']
})
export class NewClassromComponent implements OnInit {
  Classrom: FormGroup;
  constructor(private classService: ClassService) {
    this.Classrom = new FormGroup({
      className: new FormControl(''),
      schoolName: new FormControl(''),
    });
  }
  addNewClass() {
    if(this.Classrom.valid) {
      this.classService.addNewClass(this.Classrom.value).subscribe(res => console.log(res));
    }
  }
  ngOnInit(): void {
  }

}
