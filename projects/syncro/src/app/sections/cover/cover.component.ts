import { ScrollsService } from './../../_services/scrolls.service';
import { Component } from '@angular/core';
import { ResponsiveContainerImgComponent } from '../../_ux-kit';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TextTickerComponent } from '../../_ui-kit/text-ticker.component';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ResponsiveContainerImgComponent, MatButtonModule, TextTickerComponent],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent {
  scrollsService = new ScrollsService();

  dynamicsWorks = [
    'Angular Developer',
    'Software Developer.',
    'Software Engineer.',
    'Full-Stack Developer.',
    'Front-End.',
    'Back-End.',
    'Web Developer.',
    'UX/UI.',
    'Trafficker.',
    'SEO & Web Curator.'
  ];

  dynamicsManage = [
    'Responsive Design.',
    'Maquetado.',
    'Wireframes.',
    'Prototipado.',
    'Vectores.',
    'Editores de texto.',
    'Editores de imágenes.',
    'Editores de video.',
    'Programas de edición.',
    'Correción de Código.',
    'Lenguajes.',
    'Plataformas adserver.',
    'Bocetado.',
    'AWS.'
  ];

  getClass() {
    return 'active';
  }

  clickToScroll(targetId: string): void {
    this.scrollsService.scrollToTarget(targetId);
  }
}
