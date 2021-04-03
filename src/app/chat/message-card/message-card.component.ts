import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
})
export class MessageCardComponent implements OnInit {
  @Input() message!: Message;
  @Input() userId?: string;

  constructor() {}

  ngOnInit(): void {
    // validate that props are present
    if (!this.message) {
      throw new Error('message attribute is required but missing');
    }
  }
}
