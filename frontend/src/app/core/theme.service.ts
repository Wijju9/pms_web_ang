import { Injectable } from '@angular/core';

type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'pms-theme';
  private activeTheme: ThemeMode = 'light';

  constructor() {
    this.activeTheme = this.readStoredTheme();
    this.applyTheme(this.activeTheme);
  }

  get theme(): ThemeMode {
    return this.activeTheme;
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.activeTheme === 'light' ? 'dark' : 'light';
    this.setTheme(nextTheme);
  }

  setTheme(theme: ThemeMode): void {
    this.activeTheme = theme;
    this.applyTheme(theme);
    localStorage.setItem(this.storageKey, theme);
  }

  private readStoredTheme(): ThemeMode {
    const storedTheme = localStorage.getItem(this.storageKey);
    return storedTheme === 'dark' ? 'dark' : 'light';
  }

  private applyTheme(theme: ThemeMode): void {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}
