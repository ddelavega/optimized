import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-container-img',
  standalone: true,
  imports: [],
  template: `
  <div class="responsive__container">
  <p class="img">
    <img src="./images/{{src}}" alt="">
  </p>
</div>`,
  styles: `
  .responsive__container {
  p.img {
    transition: 0.6s;
    overflow: hidden;
    height: 100%;
    padding: 0;
    margin-block: 0;
    text-align: center;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    filter: grayscale(100%);
    &:hover {
      box-shadow: 0 0.3rem 0.8rem rgba(#333333, 0.6);
      filter: grayscale(0%);
    }
    img {
      height: 100%;
      display: block;
      margin: unset;
      max-width: unset;
      min-width: 100%;
    }
  }
}
`
})
export class ResponsiveContainerImgComponent {
  @Input() src!: string;
}
