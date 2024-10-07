import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `@if (isAdmin) {
    <button>Admin button</button>
    } @else {
    <p>Not an admin</p>
    }`,
})
export class AdminComponent {
  isAdmin = false;
}
