import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openLogin = new EventEmitter();
  openRegister = new EventEmitter();
  loading = true;
  api = 'https://homeschoolprojectapi.azurewebsites.net/api/';
  constructor() { }
  openLoginModal() {
    this.openLogin.emit();
  }
  openRegisterModal() {
    this.openRegister.emit();
  }

}
