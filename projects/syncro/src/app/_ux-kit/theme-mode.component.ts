import { Component, OnInit, inject } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ThemeService } from '../_services';

@Component({
  selector: 'app-theme-mode',
  standalone: true,
  imports: [],
  template: `
    <a class="icon-box" (click)="toggleTheme()">
      @if (themeService.themeSignal() === 'dark') {
      <i class="icon ico-dark-mode night"></i>
      } @else {
      <i class="icon ico-light-mode"></i>
      }
    </a>
`,
  styles: `// Color of icon
  a{
    cursor: pointer;
  }
  .night {
  text-shadow: 0rem 0rem 10px rgba(0, 255, 255, 1);
  color: rgba(0, 255, 255, 1);
}`
})
export class ThemeModeComponent implements OnInit {

  mediaQueryList: MediaQueryList;

  constructor(
    public mediaMatcher: MediaMatcher,
  ) {
    this.mediaQueryList = mediaMatcher.matchMedia('(prefers-color-scheme: dark)');
  }

  ngOnInit(): void {
    this.updateThemeBasedOnSystemPreference();
    // Check if addEventListener is available, otherwise fall back to addListener
    if (this.mediaQueryList.addEventListener) {
      this.mediaQueryList.addEventListener('change', this.onSystemColorSchemeChange.bind(this));
    }
  }

  updateThemeBasedOnSystemPreference(): void {
    const theme = this.mediaQueryList.matches ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }

  onSystemColorSchemeChange(event: MediaQueryListEvent): void {
    const theme = event.matches ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }

  themeService: ThemeService = inject(ThemeService);
  toggleTheme() {
    this.themeService.updateTheme();
  }
}
