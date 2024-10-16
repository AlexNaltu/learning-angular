import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TodoListItemComponent } from './components/todo-list-item.component';
import { SignUpFormComponent } from './components/sign-up-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { ExpandablePanelComponent } from './components/expandable-panel/expandable-panel.component';
import { CustomHeaderComponent } from './components/custom-header-card/custom-header-card.component';
import { DetailsComponent } from './components/details/details.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostsService } from './posts.service';

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
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'learning-angular';

  userName: string = 'John Doe';

  onNameChange(name: string) {
    this.userName = name;
  }

  postService = inject(PostsService);

  posts: any[] = [];

  constructor() {
    this.postService.getPostsByParams(1).subscribe({
      next: (data: any) => {
        this.posts = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
