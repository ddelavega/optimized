import { Component, inject, Input, OnInit } from '@angular/core';
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
  public results1$!: Observable<BreakpointState>;
  public screenSmall$!: Observable<BreakpointState>;
  isSmallScreen!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this.results1$ = this.breakpointObserver.observe(['(max-width: 873px)', '(max-width: 1198px)'])
    this.screenSmall$ = this.breakpointObserver.observe('(max-width: 873px)')
    this.screenSmall$.subscribe(result => {
      this.isSmallScreen = result.matches;
      this.sidenavService.setNavStatus('close')
    });
  }
  toggleSidenav() {
    this.sidenavService.updateNavStatus();
  }

  getClass() {
    return 'active';
  }

}
