import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="border-bottom shadow-sm p-3 mb-4 rounded-3 app-header">
      <div class="d-flex justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 mb-0">Property Management System</h1>
          <p class="mb-0 text-body-secondary">Manage everything in one place.</p>
        </div>

        <button class="btn btn-outline-primary d-inline-flex align-items-center gap-2" type="button" (click)="toggleTheme()">
          <i class="bi" [ngClass]="themeService.theme === 'light' ? 'bi-moon-stars-fill' : 'bi-brightness-high-fill'"></i>
          <span>{{ themeService.theme === 'light' ? 'Dark' : 'Light' }} mode</span>
        </button>
      </div>
    </header>
  `,
  styles: [
    `
      .app-header {
        background-color: var(--app-surface);
      }
    `
  ]
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
