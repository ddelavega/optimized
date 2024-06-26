import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ScrollsService, SidenavService, ThemeService } from './_services';
import { routerAnimation } from './_ux-kit';
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
  // scrollsService: ScrollsService = inject(ScrollsService);
  constructor(private scrollsService: ScrollsService) {
    this.scrollsService.handleScroll();

  }

  toggleSidenav() {
    this.sidenavService.updateNavStatus();
  }

  onActivate(e: any, scrollContainer: { scrollTop: number; }) {
    scrollContainer.scrollTop = 0;
  }
  clickToScroll(targetId: string): void {
    console.log(targetId);
    this.scrollsService.scrollToTarget(targetId);
  }
}

