import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { DashboardLayoutComponent } from './features/layout/dashboard-layout.component';
import { LoginComponent } from './features/login/login.component';
import { PageComponent } from './features/pages/page.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: PageComponent,
        data: {
          title: 'Admin dashboard',
          description: 'High-level summary of operations, occupancy, and key system metrics.'
        }
      },
      {
        path: 'tenants',
        component: PageComponent,
        data: {
          title: 'Tenant/Owner management',
          description: 'Manage owner and tenant profiles, verification, and move-in/move-out records.'
        }
      },
      {
        path: 'flats',
        component: PageComponent,
        data: {
          title: 'Flat/Unit management',
          description: 'Track unit inventory, occupancy status, amenities, and assignment details.'
        }
      },
      {
        path: 'maintenance',
        component: PageComponent,
        data: {
          title: 'Maintenance request system',
          description: 'Log, assign, and track maintenance tickets with status monitoring.'
        }
      },
      {
        path: 'billing',
        component: PageComponent,
        data: {
          title: 'Billing and payment tracking',
          description: 'Manage invoices, dues, and payment reconciliation for residents.'
        }
      },
      {
        path: 'notices',
        component: PageComponent,
        data: {
          title: 'Notice board and announcements',
          description: 'Create and publish building notices, alerts, and community announcements.'
        }
      },
      {
        path: 'reports',
        component: PageComponent,
        data: {
          title: 'Report generation',
          description: 'Generate operational, financial, and compliance reports for stakeholders.'
        }
      }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' }
];
