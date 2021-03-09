import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { TextChatMessage } from '../models/TextChatMessage';
@Injectable({
  providedIn: 'root'
})
export class TextChatService {
  api = this.shared.apiChatUrl + 'TextChat/';

  constructor(
    private http: HttpClient,
    private main: MainService,
    private shared: SharedService
  ) { }

  sendMessage(messageObj): Observable<any> {
    return this.http.post<any>(this.api + 'sendMessage', messageObj).pipe(
      map(message => {
        message.sendTime = moment(message.sendTime).format('YYYY-MM-DD HH:mm:ss');
        return message;
      })
    );
  }

  getLastMessages(): Observable<any> {
    return this.http.get<any>(this.api + `getLastMessages/${this.main.currentClassrom.id}/${this.main.currentSubject.id}`).pipe(
      map(res => {
        return this.formatMessageTime(res.messages);
      })
    );
  }

  getNewerMessages(messageID): Observable<any> {
    return this.http.get<any>(this.api + `getNewerMessages/${messageID}/${this.main.currentClassrom.id}/${this.main.currentSubject.id}`).pipe(
      map(res => {
        if (res.messages) {
          return this.formatMessageTime(res.messages);
        }}
      )
    );
  }

  getOlderMessages(messageID): Observable<TextChatMessage[]> {
    return this.http.get<any>(this.api + `getOlderMessages/${messageID}/${this.main.currentClassrom.id}/${this.main.currentSubject.id}`).pipe(
      map(res => {
        if (res.messages) {
          return this.formatMessageTime(res.messages);
        }
      })
    );
  }

  formatMessageTime(messages): TextChatMessage[] {
    for (const message of messages) {
      message.sendTime = moment(message.sendTime).format('YYYY-MM-DD HH:mm:ss');
    }
    return messages;
  }
}
