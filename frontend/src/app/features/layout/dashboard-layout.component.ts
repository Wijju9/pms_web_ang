import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="d-flex min-vh-100 bg-light">
      <aside class="bg-dark text-white p-3 sidebar">
        <h5 class="mb-1">PMS Console</h5>
        <div class="small text-secondary mb-4">{{ currentUser?.role }}</div>

        <nav class="nav flex-column gap-2">
          <a class="nav-link text-white" routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Admin dashboard</a>
          <a class="nav-link text-white" routerLink="/dashboard/tenants" routerLinkActive="active">Tenant/Owner management</a>
          <a class="nav-link text-white" routerLink="/dashboard/flats" routerLinkActive="active">Flat/Unit management</a>
          <a class="nav-link text-white" routerLink="/dashboard/maintenance" routerLinkActive="active">Maintenance request system</a>
          <a class="nav-link text-white" routerLink="/dashboard/billing" routerLinkActive="active">Billing and payment tracking</a>
          <a class="nav-link text-white" routerLink="/dashboard/notices" routerLinkActive="active">Notice board and announcements</a>
          <a class="nav-link text-white" routerLink="/dashboard/reports" routerLinkActive="active">Report generation</a>
        </nav>

        <button class="btn btn-outline-light btn-sm mt-4" (click)="logout()">Logout</button>
      </aside>

      <main class="flex-grow-1 p-4">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .sidebar {
        width: min(100%, 320px);
      }

      .nav-link {
        border-radius: 0.4rem;
      }

      .nav-link.active {
        background: rgba(255, 255, 255, 0.2);
      }
    `
  ]
})
export class DashboardLayoutComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  currentUser = this.auth.getCurrentUser();

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
