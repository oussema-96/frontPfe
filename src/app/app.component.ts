import { Component } from '@angular/core';
import { AuthService } from './services/auth/authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pfe';

  constructor(private authService: AuthService)
  {}

  ngOnInit() {
    this.authService.handleAuthCookie();
  }
}
