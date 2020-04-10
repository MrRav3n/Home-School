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
    email: new FormControl('dawid@wp.pl', [Validators.required, Validators.email]),
    password: new FormControl('DAW100kr', [Validators.required, Validators.minLength(5)]),
    userCode: new FormControl(''),
  }); }

  ngOnInit(): void {
    this.shared.openRegister.subscribe(res => {
      this.openRegister.nativeElement.click();
    });
  }
  submit() {
    this.registerForm.setControl('userRole',  new FormControl(this.selectedRole));
    console.log(this.registerForm.value);
    console.log(this.registerForm.valid);
    if (this.registerForm.valid) {
      this.main.register(this.registerForm.value).subscribe(res => {
        console.log(res);
      });
    } else {

    }
  }
  // select you are student or teacher ( 0 - student, 1 - teacher)
  select(select: number) {
    this.selectedRole = select;
  }
}
