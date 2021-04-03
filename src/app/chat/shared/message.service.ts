import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class MessageService {
  public messages: Message[] = [];

  constructor(private http: HttpClient) {
    this.fetchMessages();
  }

  public fetchMessages(): void {
    this.http.get<Message[]>(`${environment.serverUrl}/messages`).subscribe(
      (messages) => {
        for (const message of messages) {
          if (message.timestamp) {
            message.timestamp = new Date(message.timestamp);
          }
        }
        this.messages = messages;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public addMessage(message: Message): void {
    if (message.timestamp) {
      message.timestamp = new Date(message.timestamp);
    }
    this.messages.push(message);
  }

  public addMessages(messages: Message[]): void {
    this.messages = [...this.messages, ...messages];
  }
}
