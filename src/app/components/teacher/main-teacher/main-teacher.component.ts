import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../core/main/main.service';
import { SharedService } from '../../../core/shared/shared.service';

@Component({
  selector: 'app-main-teacher',
  templateUrl: './main-teacher.component.html',
  styleUrls: ['./main-teacher.component.scss']
})
export class MainTeacherComponent implements OnInit {
  constructor(
    public main: MainService,
    public shared: SharedService
  ) { }

  ngOnInit(): void {

  }
  showCode(e, id) {
    e.stopPropagation();
    e.preventDefault();
    this.shared.openCodeModal(id);
  }
}
