import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/shared/shared.service';
import { MainService } from '../../../core/main/main.service';
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
    this.shared.openLogin.subscribe(res => {
      this.openModal.nativeElement.click();
    });
  }
  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.shared.loading = true;
      this.shared.openLoginModal();
      this.main.login(this.loginForm.value).subscribe(res => {
        this.main.user = res.userToReturn;
        this.main.classrom = res.classes;
        this.main.ifUserExists();
        this.shared.loading = false;
        localStorage.setItem('homeschooltoken', res.token);
      });
    }
  }
}
