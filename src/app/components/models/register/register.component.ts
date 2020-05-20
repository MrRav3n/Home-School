import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/shared/shared.service';
import { MainService } from '../../../core/main/main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
    this.shared.openRegister.subscribe(res => {
      this.openRegister.nativeElement.click();
    });
  }
  submit() {
    this.submitted = true;
    this.registerForm.setControl('userRole',  new FormControl(this.selectedRole));
    if (this.registerForm.valid) {
      this.main.register(this.registerForm.value).subscribe(res => {
        localStorage.setItem('homeschooltoken', res.token);
        this.main.user = res.userToReturn;
        this.toastr.success('Rejestracja przebiegła pomyślnie', 'Udało się!');
        this.shared.openRegisterModal();
        this.main.ifUserExists();
      });
    }
  }
  // select you are student or teacher ( 0 - student, 1 - teacher)
  select(select: number) {
    this.selectedRole = select;
  }
}
