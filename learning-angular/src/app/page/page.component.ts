import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  pageId = input.required<string>();
  limit = input.required<string>();
}
