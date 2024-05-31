import { DOCUMENT, NgIf, isPlatformServer } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-fullscreen',
  standalone: true,
  imports: [NgIf, MatIcon],
  template: `
    <a class="icon-box" (click)="!isFullScreen ? openFullscreen() : closeFullscreen()">
      @if (!isFullScreen) {
      <i class="icon ico-fullscreen"></i>
      } @else {
      <i class="icon ico-exit-fullscreen"></i>
      }
    </a>`,
  styles: `
  a{
    cursor: pointer;
    color: var(--dark-color-primary);

  }`
})
export class FullscreenComponent implements OnInit {
  elem: any;
  isFullScreen: boolean = false;
  extendedDocument: any;
  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }
  ngOnInit(): void {

    const extendedDocument = this.document as Document & {
      mozCancelFullScreen?: () => Promise<void>;
      webkitExitFullscreen?: () => Promise<void>;
      msExitFullscreen?: () => Promise<void>;
      mozRequestFullScreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    };

    // this.fullscreenService.fullscreenChange.subscribe(
    //   (status: boolean) => { this.isFullScreen = status; console.log('isFullScreen', this.isFullScreen); }

    // )
    this.chkScreenMode();
    this.elem = extendedDocument.documentElement;
  }
  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenmodes(event: any) {
    this.chkScreenMode();
  }
  chkScreenMode() {
    // Check if running on the server to avoid accessing `document`
    if (isPlatformServer(this.platformId)) {
      return; // Exit the function if on the server
    }

    this.isFullScreen = !!this.document.fullscreenElement;
    if (document.fullscreenElement) {
      //fullscreen
      this.isFullScreen = true;
    } else {
      //not in full screen
      this.isFullScreen = false;
    }
  }
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.extendedDocument.mozRequestFullScreen) {
      /* Firefox */
      this.extendedDocument.mozRequestFullScreen();
    } else if (this.extendedDocument.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.extendedDocument.webkitRequestFullscreen();
    } else if (this.extendedDocument.msRequestFullscreen) {
      /* IE/Edge */
      this.extendedDocument.msRequestFullscreen();
    }
  }
  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.extendedDocument.mozCancelFullScreen) {
      /* Firefox */
      this.extendedDocument.mozCancelFullScreen();
    } else if (this.extendedDocument.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.extendedDocument.webkitExitFullscreen();
    } else if (this.extendedDocument.msExitFullscreen) {
      /* IE/Edge */
      this.extendedDocument.msExitFullscreen();
    }
  }

}
