import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ApiService, DashboardStats } from '../../core/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private readonly api = inject(ApiService);
  stats: DashboardStats | null = null;
  loading = true;

  ngOnInit(): void {
    this.api.getStats().subscribe({
      next: (res) => {
        this.stats = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
