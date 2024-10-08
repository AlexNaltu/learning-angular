import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: `admin.component.html`,
})
export class AdminComponent {
  announcement = 'Welcome to the admin page!';
  adminList = [
    { name: 'Admin 1', age: 20 },
    { name: 'Admin 2', age: 222 },
    { name: 'Admin 3', age: 123 },
  ];

  transformText() {
    if (this.announcement === this.announcement.toUpperCase()) {
      this.announcement = this.announcement.toLowerCase();
    } else {
      this.announcement = this.announcement.toUpperCase();
    }
  }
}
