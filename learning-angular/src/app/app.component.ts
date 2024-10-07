import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListItemComponent } from './components/todo-list-item.component';
import { SignUpFormComponent } from './components/sign-up-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListItemComponent, SignUpFormComponent],
  template: `<div>
    <todo-list-item></todo-list-item>
    <sign-up-form></sign-up-form>
  </div>`,
})
export class AppComponent {
  title = 'learning-angular';
}
