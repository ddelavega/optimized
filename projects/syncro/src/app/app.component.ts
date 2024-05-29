import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidenavService, ThemeService } from './_services';
import { FullscreenComponent, ThemeModeComponent } from './_ux-kit';
import { NavComponent } from './_ui-kit';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'syncro';
  themeService: ThemeService = inject(ThemeService);
  sidenavService: SidenavService = inject(SidenavService);

  toggleSidenav() {
    this.sidenavService.updateNavStatus();
  }
}
