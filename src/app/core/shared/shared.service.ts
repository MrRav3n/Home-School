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
  apiUrl = 'https://homeschoolapi.herokuapp.com/api/';
  apiFilesUrl = 'https://filestorageapi.herokuapp.com/api/';
  apiNamesUrl = 'https://returnusernamesapi.herokuapp.com/api/';
  apiChatUrl = 'https://textchatapi.herokuapp.com/api/';
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
