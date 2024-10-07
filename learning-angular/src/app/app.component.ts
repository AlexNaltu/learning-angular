import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListItemComponent } from './components/todo-list-item.component';
import { SignUpFormComponent } from './components/sign-up-form.component';
import { AdminComponent } from './components/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListItemComponent,
    SignUpFormComponent,
    AdminComponent,
  ],
  template: `<div>
    <todo-list-item></todo-list-item>
    <sign-up-form></sign-up-form>
    <app-admin></app-admin>
  </div>`,
})
export class AppComponent {
  title = 'learning-angular';
}
