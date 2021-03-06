import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { MainService } from '../../../core/services/main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('openModal') openModal;
  loginForm: FormGroup;
  submitted = false;

  constructor(
    public shared: SharedService,
    private main: MainService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('dawid@wp.pl', [Validators.required, Validators.email]),
      password: new FormControl('DAW100kr', [Validators.required, Validators.minLength(5)]),
    });
  }

  ngOnInit(): void {
    this.shared.openLogin.subscribe(() => {
      this.openModal.nativeElement.click();
    });
  }

  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.shared.loading = true;
      this.shared.openLoginModal();
      this.main.login(this.loginForm.value);
    }
  }
}
