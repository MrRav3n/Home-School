import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-classrom',
  templateUrl: './new-classrom.component.html',
  styleUrls: ['./new-classrom.component.scss']
})
export class NewClassromComponent implements OnInit {
  Classrom: FormGroup;
  constructor() {
    this.Classrom = new FormGroup({
      email: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

}
