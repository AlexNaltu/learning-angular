import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: `todo-list-item.component.html`,
  standalone: true,
  styles: `
    li {
      color: red;
      font-weight: bold;
    }
  `,
})
export class TodoListItemComponent {
  taskTitle =
    'template uses double curly braces to distinguish dynamic and static content';
  isVisible = false;
  taskNumber = 20;

  changeTaskTitle(newTaskTitle: string) {
    this.taskTitle = newTaskTitle;
  }

  changeVisibility() {
    this.isVisible = true;
  }

  incrementTaskNumber() {
    this.taskNumber = 1;
  }
}
