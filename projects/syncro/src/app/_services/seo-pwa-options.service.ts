import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meta } from '@angular/platform-browser';
import pkg from '../../../../../package.json';

@Injectable({
  providedIn: 'root'
})
export class SeoPwaOptionsService {
  currentYear: number;
  yearsSince: number;
  vers = pkg.version;
  ngVersion = VERSION;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta) {
    this.currentYear = new Date().getFullYear();
    this.yearsSince = this.currentYear - 2007;
    // console.log(this.yearsSince);

  }

  millisToTime = function (ms: number): string {
    const x = ms / 1000;
    const seconds = Math.floor(x % 60);
    // x /= 60;
    // let minutes = Math.floor(x % 60);
    // x /= 60;
    // let hours = Math.floor(x % 24);
    // x /= 24;
    // let days = Math.floor(x);
    const msg = `Recibido ${seconds === 0 ? x : seconds} seg. aprox.`;
    return msg;
  };


  whatsappMsg(param: string) {
    const phoneNumber = '541149724813';
    if (!isPlatformServer(this.platformId)) {

      if (param) {
        const message = encodeURIComponent(param);

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      } else {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
      }
    }
  }

  getMeta(description: string = 'Alliance Argentina Jiu Jitsu', keywords: string = 'Alliance Argentina Jiu Jitsu') {
    if (description && keywords) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ name: 'keywords', content: keywords });
    }
  }

}
