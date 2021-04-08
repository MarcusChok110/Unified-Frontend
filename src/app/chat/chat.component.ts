import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Message } from './shared/message.model';
import { MessageService } from './shared/message.service';
import { ProfileService } from '../profile/shared/profile.service';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  public messageInput = '';

  @ViewChild('messageContainer')
  private messageContainer?: ElementRef<HTMLDivElement>;
  private socketSubscription?: Subscription;

  constructor(
    public messageService: MessageService,
    public profileService: ProfileService,
    private rxStompService: RxStompService
  ) {}

  public onSubmit(): void {
    // if string is empty, do nothing
    if (!this.messageInput) {
      return;
    }

    const { sub, nickname } = this.profileService.profile;
    const body = JSON.stringify(new Message(sub, nickname, this.messageInput));

    this.rxStompService.publish({
      destination: '/app/add',
      body,
    });

    // reset the field
    this.messageInput = '';
  }

  public onDelete(id: number): void {
    this.rxStompService.publish({
      destination: '/app/delete',
      body: String(id),
    });
  }

  public scrollToBottom(smooth: boolean): void {
    setTimeout(() => {
      if (this.messageContainer) {
        this.messageContainer.nativeElement.scroll({
          top: this.messageContainer.nativeElement.scrollHeight,
          behavior: smooth ? 'smooth' : 'auto',
        });
      }
    }, 100);
  }

  ngOnInit(): void {
    // set up socket handler
    this.socketSubscription = this.rxStompService
      .watch('/topic/responses')
      .subscribe((message) => {
        const response = JSON.parse(message.body);

        // delete mapping
        if (typeof response === 'number') {
          return this.messageService.deleteMessage(response);
        }

        this.messageService.addMessage(response);
        this.scrollToBottom(true);
      });

    // scroll to bottom of chat history
    this.scrollToBottom(false);
  }

  ngOnDestroy(): void {
    this.socketSubscription?.unsubscribe();
  }
}
