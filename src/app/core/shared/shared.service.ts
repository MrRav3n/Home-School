import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openLogin = new EventEmitter();
  openRegister = new EventEmitter();
  api = 'https://loginregisterapi.azurewebsites.net/';
  constructor() { }
  openLoginModal() {
    this.openLogin.emit();
  }
  openRegisterModal() {
    this.openRegister.emit();
  }

}
