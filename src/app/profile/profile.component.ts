import { Component, OnInit } from '@angular/core';
import { ProfileService } from './shared/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public showJSON = false;
  constructor(public profileService: ProfileService) {}

  public toggleView(): void {
    this.showJSON = !this.showJSON;
  }

  ngOnInit(): void {}
}
