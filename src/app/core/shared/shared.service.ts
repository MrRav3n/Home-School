import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openLogin = new EventEmitter();
  openRegister = new EventEmitter();
  openCode = new EventEmitter();
  openMarksList = new EventEmitter();
  loading = true;
  openHomework = new EventEmitter();
  api = 'https://homeschool-api.azurewebsites.net/api/';
  constructor() { }
  openLoginModal() {
    this.openLogin.emit();
  }
  openMarksListModal(res) {
    this.openMarksList.emit(res);
  }
  openHomeworkModal(res) {
    this.openHomework.emit(res);
  }
  openCodeModal(code: string) {
    this.openCode.emit(code);
  }
  openRegisterModal() {
    this.openRegister.emit();
  }

}
