import { Injectable } from '@angular/core';

export type UserRole = 'Admin / Building Manager' | 'Accountant' | 'Tenant / Owner' | 'Security Staff';

export interface AuthUser {
  username: string;
  role: UserRole;
}

interface LoginUser extends AuthUser {
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'pms-auth-user';

  private readonly users: LoginUser[] = [
    { username: 'admin', password: 'admin123', role: 'Admin / Building Manager' },
    { username: 'accountant', password: 'accountant123', role: 'Accountant' },
    { username: 'tenant', password: 'tenant123', role: 'Tenant / Owner' },
    { username: 'security', password: 'security123', role: 'Security Staff' }
  ];

  login(username: string, password: string): boolean {
    const found = this.users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password
    );

    if (!found) {
      return false;
    }

    const sessionUser: AuthUser = { username: found.username, role: found.role };
    localStorage.setItem(this.storageKey, JSON.stringify(sessionUser));
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  getCurrentUser(): AuthUser | null {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
}
