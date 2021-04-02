import { Component, OnInit } from '@angular/core';
import { Message, mockMessages } from './shared/message.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public messages: Message[] = [];
  public messageInput = '';

  constructor(private http: HttpClient) {}

  private fetchMessages(): void {
    this.http.get<Message[]>(environment.serverUrl).subscribe(
      (messages) => {
        this.messages = messages;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public onSubmit(): void {
    console.log(this.messageInput);
    this.messageInput = '';
  }

  public loadMockMessages(): void {
    this.messages = mockMessages;
  }

  ngOnInit(): void {
    this.fetchMessages();
  }
}
