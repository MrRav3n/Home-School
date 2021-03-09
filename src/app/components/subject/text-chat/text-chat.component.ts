import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextChatService } from '../../../core/services/text-chat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../../core/services/main.service';
import { TextChatMessage } from '../../../core/models/TextChatMessage';

@Component({
  selector: 'app-text-chat',
  templateUrl: './text-chat.component.html',
  styleUrls: ['./text-chat.component.scss']
})
export class TextChatComponent implements OnInit, OnDestroy {
  messageForm: FormGroup;
  messages: TextChatMessage[];
  loader = true;
  timer;
  userData;

  constructor(
    private tcService: TextChatService,
    private main: MainService
  ) {
    this.messageForm = new FormGroup({
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getLastMessages();
    this.timer = setInterval(() => {
      this.getNewerMessages();
    }, 5000);
    const {name, surrname} = this.main.user;
    this.userData = {name, surrname};
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  getNewerMessages() {
    this.tcService.getNewerMessages(this.messages[0].messageID).subscribe(messages => {
      if (messages) {
        for (const message of messages) {
          this.messages.push(message);
        }
      }
    });
  }

  getLastMessages() {
    this.tcService.getLastMessages().subscribe(messages => {
      this.loader = false;
      this.messages = messages;
    });
  }

  getOlderMessages() {
    this.loader = true;
    this.tcService.getOlderMessages(this.messages[this.messages.length - 1].messageID).subscribe(messages => {
      if (messages) {
        for (const message of messages) {
          this.messages.push(message);
        }
      }
      this.loader = false;
    });
  }

  sendMessage() {
    this.messageForm.setControl('subjectID', new FormControl(this.main.currentSubject.id));
    this.messageForm.setControl('classID', new FormControl(this.main.currentClassrom.id));
    if (this.messageForm.valid) {
      this.tcService.sendMessage(this.messageForm.value).subscribe(res => {
        this.messages.unshift(res);
      });
    }
  }

  doestUserDataMatch(name, surrname) {
    if (name === this.userData.name && surrname === this.userData.surrname) {
      return true;
    }
  }
}
