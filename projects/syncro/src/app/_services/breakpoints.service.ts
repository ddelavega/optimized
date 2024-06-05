
import { Injectable, signal } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable()
export class BreakpointsService {
  screenSignal = signal<boolean>(false);

  setBPStatus(visible: boolean) {
    this.screenSignal.set(visible);
  }
}
