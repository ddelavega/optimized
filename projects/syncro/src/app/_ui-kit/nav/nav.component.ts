import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FullscreenComponent, ThemeModeComponent } from '../../_ux-kit';
import { SidenavService, ThemeService } from '../../_services';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeModeComponent, FullscreenComponent, AsyncPipe, JsonPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  @Input() device: string = 'mobile';
  themeService: ThemeService = inject(ThemeService);
  sidenavService: SidenavService = inject(SidenavService);
  breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  public screenSmall!: Observable<BreakpointState>;
  public screenMedium!: Observable<BreakpointState>;
  isSmallScreen!: boolean;
  isMediumScreen!: boolean;

  ngOnInit() {
    this.screenMedium = this.breakpointObserver.observe('(max-width: 1193px)');
    this.screenSmall = this.breakpointObserver.observe('(max-width: 873px)');
    this.screenSmall.subscribe(result => {
      this.isSmallScreen = result.matches;
      this.sidenavService.setNavStatus('close');
      this.sidenavService.setBPStatus(this.isSmallScreen, this.isMediumScreen);
    });

    this.screenMedium.subscribe(result => {
      this.isMediumScreen = result.matches;
      this.sidenavService.setBPStatus(this.isSmallScreen, this.isMediumScreen);
    });

  }

  toggleSidenav() {
    this.sidenavService.updateNavStatus();
  }

  getClass() {
    return 'active';
  }
}
