import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Navbar title
  public title = 'Unified';

  // Navbar links
  public routes = [
    { url: '/', display: 'Home' },
    { url: '/profile', display: 'Profile' },
    { url: '/chat', display: 'Chat' },
  ];

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  public login(): void {
    this.auth.loginWithRedirect();
  }

  public logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

  ngOnInit(): void {}
}
