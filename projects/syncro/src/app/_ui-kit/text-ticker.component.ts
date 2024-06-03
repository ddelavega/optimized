import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-ticker',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
  @if (dynamics.length && class) {

<div class="wrapper__ticker {{class ? class : ''}}">
  <span class="static-txt text-secondary">{{texts}}</span>
  <ul class="dynamic-txts">
    @for (item of dynamics; track $index) {
    <li><span class="text-primary adapted-titles font-bold balanced">{{item}}</span></li>
    }

  </ul>
</div>
}`,
  styles: `
  .wrapper__ticker {
  display: grid;
  grid-template-columns: var(--services-blocks-width);
  align-items: center;
  background-color: #88d8d0;
  padding: 1rem 0;
  margin-block: 4rem;
  text-align: center;
}
.wrapper__ticker .static-txt {
  color: #333;
  font-size: clamp(1.4rem, 10vw, 1.6rem);
  // background-color: yellow;
  // font-weight: bold;
}
.wrapper__ticker .dynamic-txts {
  margin-left: 15px;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
  align-self: auto;
}
.dynamic-txts li {
  list-style: none;
  color: #562b5c;
  height: 90px;

  font-size: clamp(1.6rem, 14vw, 1.8rem);
  // font-weight: bold;
  position: relative;
  line-height: 90px;
  top: 0;
  animation: slide 30s steps(10) infinite;
}
@keyframes slide {
  100% {
    top: -900px;
  }
}
.dynamic-txts li span {
  position: relative;
  margin: 15px 0;
  // background-color: greenyellow;
  // line-height: 90px;
}
.dynamic-txts li span::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #88d8d0;
  border-left: 4px solid #562b5c;
  animation: typing 3s steps(30) infinite;
}
@keyframes typing {
  40%,
  60% {
    left: calc(100% + 20px);
  }
  100% {
    left: 0;
  }
}`
})
export class TextTickerComponent {
  @Input() dynamics: string[] = [];
  @Input() texts: string = '';
  @Input() class: string = '';


}
