import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div class="card shadow-sm p-4 login-card">
        <h2 class="mb-2 text-center">Property Management Login</h2>
        <p class="text-muted text-center mb-4">UI-only authentication with Angular guard</p>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" formControlName="username" class="form-control" placeholder="admin" />
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" formControlName="password" class="form-control" placeholder="••••••••" />
          </div>

          <div *ngIf="error" class="alert alert-danger py-2">{{ error }}</div>

          <button class="btn btn-primary w-100" type="submit">Sign in</button>
        </form>

        <div class="small text-muted mt-4">
          Demo users: admin/admin123, accountant/accountant123, tenant/tenant123, security/security123
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .login-card {
        width: min(100%, 440px);
        border-radius: 1rem;
      }
    `
  ]
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  error = '';

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(): void {
    this.error = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { username, password } = this.form.getRawValue();
    if (!this.auth.login(username, password)) {
      this.error = 'Invalid credentials. Please use one of the demo accounts.';
      return;
    }

    this.router.navigate(['/dashboard']);
  }
}
