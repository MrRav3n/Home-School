import { Component, OnInit } from '@angular/core';
import { TextChatService } from '../../../core/chat-service/text-chat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../../core/main/main.service';

@Component({
  selector: 'app-text-chat',
  templateUrl: './text-chat.component.html',
  styleUrls: ['./text-chat.component.scss']
})
export class TextChatComponent implements OnInit {
  messageForm: FormGroup;
  messages = [];
  loadingMessages = true;
  constructor(
    private tcService: TextChatService,
    private main: MainService
  ) {
    this.messageForm = new FormGroup({
      message: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.getLastMessages();
    setInterval(() => {
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
      objDiv.addEventListener('scroll', (e) => {
        if (objDiv.scrollTop < 5 && !this.loadingMessages) {
          this.getOlderMessages();
        }
      });
    });
  }
  getOlderMessages() {
    console.log(this.messages[0].messageID);
    this.loadingMessages = true;
    this.tcService.getOlderMessages(this.messages[this.messages.length - 1].messageID).subscribe(res => {
      console.log(res);
      if (res.messages) {
        for (const message of res.messages) {
          this.messages.push(message);
        }
      }
      console.log(this.messages);
      this.loadingMessages = false;
    });
  }
}
