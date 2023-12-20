import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    this.darkModeQuery.addEventListener('change', e => {
      this.setTheme(e.matches ? 'dark' : 'light');
    });
  }

  setTheme(theme: string) {
    if (theme === 'dark') {
      console.log("isDark Mode: ", theme);
    } else {
      console.log("isLight Mode: ", theme);
    }
  }

  getCurrentTheme(): string {
    return this.darkModeQuery.matches ? 'dark' : 'light';
  }
}
