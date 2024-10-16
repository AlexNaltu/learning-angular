import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  router = inject(Router);
  goToHome(): void {
    this.router.navigate(['products', 'fsfsf', 'sfsfsf']);
  }
}
