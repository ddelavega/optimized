import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidenavService, ThemeService } from './_services';
import { FullscreenComponent, ThemeModeComponent, routerAnimation } from './_ux-kit';
import { NavComponent } from './_ui-kit';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routerAnimation]

})
export class AppComponent {
  title = 'syncro';
  themeService: ThemeService = inject(ThemeService);
  sidenavService: SidenavService = inject(SidenavService);

  toggleSidenav() {
    this.sidenavService.updateNavStatus();
  }

  onActivate(e: any, scrollContainer: { scrollTop: number; }) {
    scrollContainer.scrollTop = 0;
  }
}
