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
  screenSignal = signal<boolean>(false);

  setBPStatus(value_1: boolean, value_2: boolean) {
    const visible = !value_1 && value_2;
    this.screenSignal.set(visible);
  }
}
