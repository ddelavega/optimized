import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollsService {
  private targetIdSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  scrollToTarget(targetId: string): void {
    this.targetIdSubject.next(targetId);
    // console.log('click');
  }

  observeTargetId(): BehaviorSubject<string> {
    return this.targetIdSubject;
  }

  handleScroll(): void {
    this.observeTargetId().subscribe((targetId) => {
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
