import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardStats {
  occupiedFlats: number;
  totalFlats: number;
  openMaintenance: number;
  pendingDues: number;
  activeVisitors: number;
  availableParkingSlots: number;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://localhost:5001/api';

  getStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.baseUrl}/dashboard/stats`);
  }
}
