import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private colorSchemeQuery: MediaQueryList;

  constructor() {
    this.colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  }

  detectColorScheme() {
    const darkModeOn = this.colorSchemeQuery.matches;
    const theme = darkModeOn ? 'dark' : 'light';
    this.setColorScheme(theme);
  }

  setColorScheme(theme: string) {
    localStorage.setItem('user-theme', theme);
    document.body.classList.add(theme);
  }

  isDark(): boolean {
    return localStorage.getItem('user-theme') === 'light' ? false : true;
  }
}

