import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  sidenavSignal = signal<string>('close');

  setNavStatus(navStatus: string) {
    this.sidenavSignal.set(navStatus);
  }
  updateNavStatus() {
    console.log('update navStatus');
    this.sidenavSignal.update((value) => value === 'close' ? 'open' : 'close');
  }
}
