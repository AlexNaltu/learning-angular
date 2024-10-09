import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListItemComponent } from './components/todo-list-item.component';
import { SignUpFormComponent } from './components/sign-up-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { ExpandablePanelComponent } from './components/expandable-panel/expandable-panel.component';
import { CustomHeaderComponent } from './components/custom-header-card/custom-header-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListItemComponent,
    SignUpFormComponent,
    AdminComponent,
    ExpandablePanelComponent,
    CustomHeaderComponent,
  ],
  template: `<div>
    <todo-list-item />
    <sign-up-form />
    <app-admin />
    <app-expandable-panel
      ><h1 ngProjectAs="card-title">Hello</h1></app-expandable-panel
    >
    <custom-header />
  </div>`,
})
export class AppComponent {
  title = 'learning-angular';
}
