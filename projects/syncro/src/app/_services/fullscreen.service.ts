
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {
  isFullscreen: boolean = false;
  fullscreenChange: Subject<boolean> = new Subject<boolean>();

  @HostListener('document:fullscreenchange', ['$event'])
  fullscreenHandler(event: Event): void {
    this.chkScreenMode();
  }

  chkScreenMode() {
    this.isFullscreen = !!this.document.fullscreenElement;
    this.fullscreenChange.next(this.isFullscreen);
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }

  toggleFullscreen(): void {
    if (!this.isFullscreen) {
      this.document.documentElement.requestFullscreen();
    }
  }

  exitFullscreen(): void {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    }
  }
}
