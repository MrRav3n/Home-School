import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextChatService } from '../../../core/services/text-chat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../../core/services/main.service';

@Component({
  selector: 'app-text-chat',
  templateUrl: './text-chat.component.html',
  styleUrls: ['./text-chat.component.scss']
})
export class TextChatComponent implements OnInit, OnDestroy {
  messageForm: FormGroup;
  messages;
  loadingMessages = true;
  timer;

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

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  getNewerMessages() {
    this.tcService.getNewerMessages(this.messages[0].messageID).subscribe(res => {
      if (res) {
        for (const message of res.messages) {
          this.messages.push(message);
        }
      }

    });
  }

  getLastMessages() {
    this.tcService.getLastMessages().subscribe(res => {
      this.loadingMessages = false;
      this.messages = res.messages;
      const objDiv = document.getElementById('chatDiv');
      objDiv.addEventListener('scroll', () => {
        if (objDiv.scrollTop < 5 && !this.loadingMessages) {
          this.getOlderMessages();
        }
      });
    });
  }

  getOlderMessages() {
    this.loadingMessages = true;
    this.tcService.getOlderMessages(this.messages[this.messages.length - 1].messageID).subscribe(res => {
      if (res.messages) {
        for (const message of res.messages) {
          this.messages.push(message);
        }
      }
      this.loadingMessages = false;
    });
  }
}
