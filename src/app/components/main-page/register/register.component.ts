import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/shared/shared.service';
import { MainService } from '../../../core/main/main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('openRegister') openRegister;
  registerForm: FormGroup;
  selectedRole = 0;
  constructor(
    public shared: SharedService,
    private main: MainService,
  ) {
    this.registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    studentCode: new FormControl(),
    userRole: new FormControl(this.selectedRole),
  }); }

  ngOnInit(): void {
    this.shared.openRegister.subscribe(res => {
      this.openRegister.nativeElement.click();
    });
  }
  submit() {
    if (this.registerForm.valid) {

    } else {

    }
  }
  // select you are student or teacher ( 0 - student, 1 - teacher)
  select(select: number) {
    this.selectedRole = select;
  }
}
