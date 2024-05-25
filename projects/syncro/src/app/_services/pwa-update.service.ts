import { Injectable } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class PwaUpdateService {
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }

}
