import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-ticker-tape',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    @if (dynamics.length && class) {
  <div class="ticker-tape__wrapper {{class ? class : ''}}" >
    <div class="ticker-texts">
      <h2>{{ texts }} </h2>
    </div>
    <div class="ticker-tape" >
    <div class="ticker" >
      @for (item of dynamics; track $index) {
      <h3 class="ticker__item title" > {{ item }} </h3>
      }
    </div>
  </div>
  </div>
  }
`,
  styles: `
  .ticker-tape__wrapper {
  margin-block: 2rem;
  display: grid;
  place-items: center;
  grid-template-columns: var(--services-blocks-width);
  overflow: hidden;
  &.oceanic{
  background-color: #88d8d0;
    .ticker-tape .ticker__item{
      color: #562b5c;
    }
  }
  &.lavander{
    background-color: #985fe0;
    .ticker-tape .ticker__item{
      color: #2d2430;
    }
  }
}

.ticker-texts {
  color: #333;
  font-size: 0.9em;
  padding: 1rem 2rem;
}

.ticker-tape {
  margin: 0 auto;
  overflow: hidden;
  padding-left: 0;
}

.ticker-tape .ticker {
  white-space: nowrap;
  width: 120%;
  padding-left: 20%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ticker;
  animation-duration: 28s;
  transition: 0.3s;
}

.ticker-tape .ticker__item {
  font-size: clamp(1.6rem, 14vw, 1.8rem);
  // color: #562b5c;
  display: inline-block;
  padding: 1rem 2rem;
  letter-spacing: 0.5rem;
  white-space: nowrap;
}

@keyframes ticker {
  0% {
    transform: translateX(0);
    visibility: visible;
  }
  100% {
    transform: translateX(-100%);
  }
}
`
})
export class TickerTapeComponent {
  @Input() dynamics: string[] = [];
  @Input() texts: string = '';
  @Input() class: string = '';

}
