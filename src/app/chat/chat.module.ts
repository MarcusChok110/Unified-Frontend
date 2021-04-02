import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  exports: [ChatComponent],
})
export class ChatModule {}
