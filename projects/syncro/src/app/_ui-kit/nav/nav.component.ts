import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FullscreenComponent, ThemeModeComponent } from '../../_ux-kit';
import { SidenavService, ThemeService } from '../../_services';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeModeComponent, FullscreenComponent,],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() device: string = 'mobile';
  themeService: ThemeService = inject(ThemeService);
  sidenavService: SidenavService = inject(SidenavService);

  toggleSidenav() {
    this.sidenavService.updateNavStatus();
  }
}
