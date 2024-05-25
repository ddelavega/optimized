import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-labs',
  standalone: true,
  imports: [],
  templateUrl: './svg-labs.component.html',
  styleUrl: './svg-labs.component.scss',

})
export class SvgLabsComponent {
  @Input() svgClass: string = '';
  @Input() imgSvg: string = '';


}
