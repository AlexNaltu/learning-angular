import {
  Component,
  computed,
  inject,
  input,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import {
  concatMap,
  delay,
  exhaustMap,
  from,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';

interface Task {
  title: string;
  completed: boolean;
}

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
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learning-angular';

  userName: string = 'John Doe';

  onNameChange(name: string) {
    this.userName = name;
  }

  postService = inject(PostsService);

  posts: any[] = [];

  array$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(map((x) => x * 3));

  constructor() {
    from([1, 2, 3, 4])
      .pipe(exhaustMap((x) => of(x)))
      .pipe(delay(1000))
      .subscribe(console.log);

    this.postService.getPostsByParams(1).subscribe({
      next: (data: any) => {
        this.posts = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  addPost() {
    this.postService
      .createPost({ title: 'New Post', body: 'New Post Body' })
      .subscribe({
        next: (data: any) => {
          console.log('Post created', data);
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        },
      });
  }

  newTask: string = '';
  tasks: WritableSignal<Task[]> = signal([]);

  // Computed signal to get the count of completed tasks
  completedTasksCount: Signal<number> = computed(
    () => this.tasks().filter((task) => task.completed).length
  );

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.update((tasks) => [
        ...tasks,
        { title: this.newTask, completed: false },
      ]);
      this.newTask = ''; // Clear the input field
    }
  }

  deleteTask(taskToDelete: Task) {
    this.tasks.update((tasks) => tasks.filter((task) => task !== taskToDelete));
  }

  toggleTaskCompletion(taskToToggle: Task) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task === taskToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  }
}
