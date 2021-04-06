import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './shared/profile.service';

@NgModule({
  declarations: [ProfileComponent],
  providers: [ProfileService],
  imports: [CommonModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
