import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public profile?: any;
  public profileJson?: string;

  constructor(public auth: AuthService) {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
      this.profileJson = JSON.stringify(profile, null, 2);
    });
  }
}
