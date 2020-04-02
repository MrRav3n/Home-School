import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/shared/shared.service';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('openRegister') openRegister;
  constructor(
    public shared: SharedService,
    private main: MainService,
  ) { }

  ngOnInit(): void {
    this.shared.openRegister.subscribe(res => {
      this.openRegister.nativeElement.click();
    });
  }

}
