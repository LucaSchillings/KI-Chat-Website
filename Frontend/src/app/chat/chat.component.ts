import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: { user: { name: string, photo: string }, text: string }[] = [];
  messageText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.messages.push(
      { user: { name: 'Alice', photo: 'img/alice-photo.jpg' }, text: 'Hallo, wie geht es dir?' },
    );
  }

  sendMessage() {
    this.messages.push(
      { user: { name: 'You', photo: 'img/your-photo.jpg' }, text: this.messageText }
    );

    this.dataService.chat(this.messageText).subscribe(
      (serverResponse: string) => {
        this.messages.push({
          user: { name: 'Server', photo: 'img/server-photo.jpg' },
          text: serverResponse
        });
      },
      error => {
        console.error('Error establishing SSE connection:', error);
      }
    );

    this.messageText = '';
  }
}
