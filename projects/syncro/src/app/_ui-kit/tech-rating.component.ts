import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tech-rating',
  standalone: true,
  imports: [NgFor],
  template: `
  <h4>
    <strong class="stack">{{tech}}</strong>
    <strong class="rate">
    @for (star of stars; track $index) {
      <i class="icon {{star.class}}" > </i>
      }
    </strong>
  </h4>
  `,
  styles: `
  h4{
    display: grid;
    grid-template-columns: 1fr 120px;
    // color: #333;
    transition: .3s;
  }

  .stack{
    text-align: right;
  }
  .rate{
    min-width: 120px;
    text-align: right;
  }
  i {
    font-size: 1.4em;
    vertical-align: middle;
  }


`,
})
export class TechRatingComponent implements OnInit {

  @Input() title: string = '';
  @Input() tech: string = '';
  @Input() rating: number = 0;
  selectedRating = 0;
  stars = [
    { id: 1, class: 'ico-circle-outline' },
    { id: 2, class: 'ico-circle-outline' },
    { id: 3, class: 'ico-circle-outline' },
    { id: 4, class: 'ico-circle-outline' },
    { id: 5, class: 'ico-circle-outline' }
  ];

  ngOnInit(): void {
    this.selectStar(this.rating);
  }
  selectStar(value: number): void {

    if (this.selectedRating === 0) {

      this.stars.filter((star) => {

        if (star.id <= value) {

          star.class = 'ico-circle-fill';

        } else {

          star.class = 'ico-circle-outline';

        }

        return star;
      });

    }

    this.selectedRating = value;


  }


}
