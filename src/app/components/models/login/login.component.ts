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
  constructor(
    public shared: SharedService,
    private main: MainService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('string', Validators.required),
      password: new FormControl('string', Validators.required),
    });
  }
  loginForm: FormGroup;
  ngOnInit(): void {
    this.shared.openLogin.subscribe(res => {
      this.openModal.nativeElement.click();
    });
  }
  submit() {
    if (this.loginForm.valid) {
      this.main.login(this.loginForm.value).subscribe(res => {
        this.main.user = res.userFromRepo;
        console.log(res.userFromRepo);
        localStorage.setItem('homeschooltoken', res.token);
      });
    }
  }
}
