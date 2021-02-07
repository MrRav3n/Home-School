import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { MainService } from '../../../core/services/main.service';
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
  submitted = false;

  constructor(
    public shared: SharedService,
    private main: MainService,
  ) {
    this.registerForm = new FormGroup({
    email: new FormControl('dawid@wp.pl', [Validators.required, Validators.email]),
    password: new FormControl('DAW100kr', [Validators.required, Validators.minLength(5)]),
    name: new FormControl('Dawid', Validators.required),
    surname: new FormControl('Kruk', Validators.required),
    userCode: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.shared.openRegister.subscribe(() => {
      this.openRegister.nativeElement.click();
    });
  }

  submit() {
    this.submitted = true;
    this.registerForm.setControl('userRole',  new FormControl(this.selectedRole));
    if (this.registerForm.valid) {
      this.main.register(this.registerForm.value);
    }
  }

  select(select: number) {
    this.selectedRole = select;
  }
}
