import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openLogin = new EventEmitter();

  api: string;
  constructor() { }
  openLoginModal() {
    this.openLogin.emit();
  }

}
