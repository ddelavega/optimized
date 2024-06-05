import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta) {

  }
  getMeta(title: string = 'Diego de la Vega', description: string = 'Diego de la Vega', keywords: string = 'Diego de la Vega') {
    if (description && keywords) {
      this.meta.updateTag({ name: 'title', content: title });
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ name: 'keywords', content: keywords });
    }
  }
}
