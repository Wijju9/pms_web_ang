import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card border-0 shadow-sm p-4">
      <h2>{{ title }}</h2>
      <p class="text-muted mb-4">{{ description }}</p>

      <div class="row g-3">
        <div class="col-md-6 col-xl-4" *ngFor="let card of cards">
          <div class="card h-100 border">
            <div class="card-body">
              <h6 class="card-title">{{ card }}</h6>
              <p class="card-text text-muted mb-0">UI placeholder widget for {{ title.toLowerCase() }}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PageComponent {
  private readonly route = inject(ActivatedRoute);

  title = this.route.snapshot.data['title'] as string;
  description = this.route.snapshot.data['description'] as string;
  cards = ['Overview', 'Recent activity', 'Actions'];
}
