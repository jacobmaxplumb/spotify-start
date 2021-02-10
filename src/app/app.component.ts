import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get token() {
    return localStorage.getItem('token');
  }

  constructor(private router: Router) {}

  public logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
