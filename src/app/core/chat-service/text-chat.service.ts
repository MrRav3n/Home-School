import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../main/main.service';
import { SharedService } from '../shared/shared.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class TextChatService {
  api = this.shared.apiChatUrl;
  constructor(
    private http: HttpClient,
    private main: MainService,
    private shared: SharedService
  ) { }
  sendMessage(messageObj): Observable<any> {
    return this.http.post<any>(this.api + 'TextChat/sendMessage', messageObj).pipe(
      map(v => {
        v.sendTime = moment().format('YYYY-MM-DD HH:mm:ss');
        return v;
      })
    );
  }
  getLastMessages(): Observable<any> {
    return this.http.get<any>(this.api + `TextChat/getLastMessages/${this.main.currentClassrom.id}/${this.main.currentSubject.id}`).pipe(
      map(v => {
        for (let i = 0; i < v.messages.length; i++) {
          v.messages[i].sendTime = moment(v.messages[i].sendTime).format('YYYY-MM-DD HH:mm:ss');
        }

        return v;
      })
    );
  }
  getNewerMessages(messageID): Observable<any> {
    return this.http.get<any>(this.api + `TextChat/getNewerMessages/${messageID}/${this.main.currentClassrom.id}/${this.main.currentSubject.id}`).pipe(
      map(v => {
        if (v.messages) {
          for (let i = 0; i < v.messages.length; i++) {
            v.messages[i].sendTime = moment(v.messages[i].sendTime).format('YYYY-MM-DD HH:mm:ss');
          }
          return v;
        }}
      )
    );
  }
  getOlderMessages(messageID): Observable<any> {
    return this.http.get<any>(this.api + `TextChat/getOlderMessages/${messageID}/${this.main.currentClassrom.id}/${this.main.currentSubject.id}`).pipe(
      map(v => {
        for (let i = 0; i < v.messages.length; i++) {
          v.messages[i].sendTime = moment(v.messages[i].sendTime).format('YYYY-MM-DD HH:mm:ss');
        }
        return v;
      })
    );
  }
}
