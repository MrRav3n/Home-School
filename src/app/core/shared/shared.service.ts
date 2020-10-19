import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openLogin = new EventEmitter();
  openRegister = new EventEmitter();
  openCode = new EventEmitter();
  openMembers = new EventEmitter();
  openMarksList = new EventEmitter();
  switchHomework = new EventEmitter();
  loading = true;
  openHomework = new EventEmitter();
  api = 'https://homeschoolapi.herokuapp.com/api/';
  apiFiles = 'https://filestorageapi.herokuapp.com/api/';
  apiNames = 'https://returnusernamesapi.herokuapp.com/api/';
  apiText = 'https://textchatapi.herokuapp.com/api/';
  constructor() { }
  openLoginModal() {
    this.openLogin.emit();
  }
  switchHomeworkEmit(res) {
    this.switchHomework.emit(res);
  }
  openMembersModal(res) {
    this.openMembers.emit(res);
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
