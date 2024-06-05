import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ResponsiveContainerImgComponent } from '../../_ux-kit';
import { BreakpointsService, ScrollsService, SeoPwaOptionsService, SidenavService } from '../../_services';
import { TextTickerComponent, TechRatingComponent } from '../../_ui-kit';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ResponsiveContainerImgComponent, MatButtonModule, TextTickerComponent, TechRatingComponent],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent {

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

  details = [
    {
      index: 0,
      title: 'Front End',
      items: [
        { tech: 'Angular', rating: 4 },
        { tech: 'Module Federation', rating: 3 },
        { tech: 'Micro Front End', rating: 2 },
        { tech: 'Angular Material', rating: 3 },
        { tech: 'IONIC', rating: 3 },
        { tech: 'Vue, React, NextJs', rating: 2 },
        { tech: 'Prime Ng', rating: 2 },
      ]
    },
    {
      index: 1,
      title: 'Code, Markup, Styles',
      items: [
        { tech: 'PHP', rating: 4 },
        { tech: 'HTML, XHTML', rating: 5 },
        { tech: 'Handlebars, Pug, EJS', rating: 3 },
        { tech: 'CSS', rating: 4 },
        { tech: 'Sass, Scss, Less', rating: 4 },
        { tech: 'Typescript, JS', rating: 3 },
        { tech: 'Webpack', rating: 2 }
      ]
    },
    {
      index: 2,
      title: 'Agile',
      items: [
        { tech: 'SCRUM', rating: 4 },
        { tech: 'Jira', rating: 3 },
        { tech: 'Trello', rating: 4 },
        { tech: 'Github Projects', rating: 4 },
        { tech: 'Confluence, Slack', rating: 2 }
      ]
    },
    {
      index: 3,
      title: 'Adobe, Image/Video editors',
      items: [
        { tech: 'Ps, Ai, Id', rating: 4 },
        { tech: 'Figma', rating: 4 },
        { tech: 'Camtasia Studio', rating: 4 },
        { tech: 'XD, Dw', rating: 3 },
        { tech: 'Acrobat Pro', rating: 2 }
      ]
    },
    {
      index: 4,
      title: 'Ad-server',
      items: [
        { tech: 'Trafficker', rating: 3 },
        { tech: 'E-planning', rating: 3 },
        { tech: 'AWS/S3', rating: 2 }
      ]
    },
    {
      index: 5,
      title: 'Package manager',
      items: [
        { tech: 'npm, yarn', rating: 3 },
      ]
    },
    {
      index: 6,
      title: 'Endpoints, API, Test',
      items: [
        { tech: 'Postman', rating: 3 },
        { tech: 'Thunder Client', rating: 3 },
        { tech: 'Insomnia', rating: 3 },
        { tech: 'Postwoman', rating: 2 },
      ]
    },
    {
      index: 7,
      title: 'Hosting, Deploy',
      items: [
        { tech: 'Vercel', rating: 4 },
        { tech: 'Firebase Hosting', rating: 3 },
        { tech: 'Github Pages', rating: 3 },
        { tech: 'Netlify', rating: 3 },
      ]
    },
    {
      index: 8,
      title: 'Git',
      items: [
        { tech: 'Git', rating: 4 },
        { tech: 'Github', rating: 3 },
        { tech: 'Gitlab', rating: 3 },
        { tech: 'BitBucket', rating: 3 },
      ]
    },
    {
      index: 9,
      title: 'Back End',
      items: [
        { tech: 'Firebase RTDB', rating: 3 },
        { tech: 'ExpressJS', rating: 3 },
        { tech: 'MongoDB', rating: 2 },
        { tech: 'NestJS', rating: 3 },
        { tech: 'MySQL', rating: 3 },
      ]
    },
    {
      index: 10,
      title: 'Ide, Edit Text',
      items: [
        { tech: 'Visual Studio Code', rating: 4 },
        { tech: 'Visual Studio', rating: 2 },
        { tech: 'Sublime Text', rating: 3 },
        { tech: 'Brackets', rating: 3 },
        { tech: 'Notepad++', rating: 3 },
      ]
    },
  ];

  seoPwaOptionService: SeoPwaOptionsService = inject(SeoPwaOptionsService)
  scrollsService: ScrollsService = inject(ScrollsService);
  sidenavService: SidenavService = inject(SidenavService);
  breakpointsService: BreakpointsService = inject(BreakpointsService);

  yearsSince = this.seoPwaOptionService.yearsSince;

  getClass() {
    return 'active';
  }

  clickToScroll(targetId: string): void {
    console.log(targetId);
    this.scrollsService.scrollToTarget(targetId);
  }

}
