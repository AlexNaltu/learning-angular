import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListItemComponent } from './components/todo-list-item.component';
import { SignUpFormComponent } from './components/sign-up-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { ExpandablePanelComponent } from './components/expandable-panel/expandable-panel.component';
import { CustomHeaderComponent } from './components/custom-header-card/custom-header-card.component';
import { DetailsComponent } from './components/details/details.component';

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
    DetailsComponent,
  ],
  template: `<div>
    <todo-list-item />
    <sign-up-form [name]="userName" />
    <app-admin />
    <app-expandable-panel
      ><h1 ngProjectAs="card-title">Hello</h1></app-expandable-panel
    >
    <custom-header />
    <app-details />
  </div>`,
})
export class AppComponent {
  title = 'learning-angular';

  userName: string = 'John Doe';

  onNameChange(name: string) {
    this.userName = name;
  }
}
