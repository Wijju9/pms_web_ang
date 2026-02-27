import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent],
  template: `
    <div class="d-flex min-vh-100 app-shell">
      <aside class="p-3 sidebar">
        <h5 class="mb-1">PMS Console</h5>
        <div class="small text-body-secondary mb-4">{{ currentUser?.role }}</div>

        <nav class="nav flex-column gap-2">
          <a class="nav-link" routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Admin dashboard</a>
          <a class="nav-link" routerLink="/dashboard/tenants" routerLinkActive="active">Tenant/Owner management</a>
          <a class="nav-link" routerLink="/dashboard/flats" routerLinkActive="active">Flat/Unit management</a>
          <a class="nav-link" routerLink="/dashboard/maintenance" routerLinkActive="active">Maintenance request system</a>
          <a class="nav-link" routerLink="/dashboard/billing" routerLinkActive="active">Billing and payment tracking</a>
          <a class="nav-link" routerLink="/dashboard/notices" routerLinkActive="active">Notice board and announcements</a>
          <a class="nav-link" routerLink="/dashboard/reports" routerLinkActive="active">Report generation</a>
        </nav>

        <button class="btn btn-outline-secondary btn-sm mt-4" (click)="logout()">Logout</button>
      </aside>

      <main class="flex-grow-1 p-4">
        <app-header></app-header>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .app-shell {
        background-color: var(--app-background);
        color: var(--bs-body-color);
      }

      .sidebar {
        width: min(100%, 320px);
        background-color: var(--app-surface);
        border-right: 1px solid var(--bs-border-color);
      }

      .nav-link {
        border-radius: 0.4rem;
        color: var(--bs-body-color);
      }

      .nav-link.active {
        background: var(--bs-primary-bg-subtle);
      }

      .nav-link:hover {
        background: var(--bs-secondary-bg);
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
