import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-blank.component.html',
  styleUrl: './navbar-blank.component.scss',
})
export class NavbarBlankComponent {
  constructor(private _Router: Router) {}
  signout(): void {
    localStorage.removeItem('_token');
    this._Router.navigate(['/login']);
  }
}
