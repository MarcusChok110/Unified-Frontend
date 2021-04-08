import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageCardComponent } from './message-card/message-card.component';
import { MessageService } from './shared/message.service';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [ChatComponent, MessageCardComponent],
  providers: [MessageService],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileModule,
  ],
  exports: [ChatComponent],
})
export class ChatModule {}
