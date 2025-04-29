import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../../types/types';

@Component({
  selector: 'app-professional',
  imports: [CommonModule],
  templateUrl: './professional.component.html',
  styleUrl: './professional.component.scss'
})

export class ProfessionalComponent {
  public projects: Project[] = [
    {
      title: 'Design System',
      body: 'A top priority of most companies is to iterate quickly whilst still producing quality code, UI/UX, and ADA compliant experiences. To address this need, I designed and developed a modular design system that standardized typography, color, components, and accessibility practices across multiple projects. The system included scalable theming support, responsive patterns, WCAG 2.1 AA compliance, and a reusable component library built with React, Material UI and Vite. It significantly reduced development time on new projects, improved design consistency across departments, and empowered teams to deliver faster, more accessible digital products.',
      img: '/img/design-system-faux.png',
      caption: 'An example of some atomic level components the design system holds.'
    },
    {
      title: 'Next/React Seed App',
      body: 'Starting a new project from scratch can be time consuming, leading to slower iteration and larger build up times for MVPs. For this I built a customizable scaffolding tool, that I like calling seed apps, to streamline the creation of modern web and mobile applications. The script generates a pre-configured project structure with built-in support for routing, theming, authentication, environment management, and dogfooded the above component library. Designed for rapid MVP development, it reduces setup time and enforces consistency across projects. Included CLI options for testing package options, CMS options, feature toggles, and best-practice defaults like TypeScript, ESLint, and Prettier.',
      img: '/img/seed-app.png',
      caption: 'An example of a scaffolder script running in a terminal.'
    },
    {
      title: 'Scaling Web Applications',
      body: '',
      img: '',
      caption: ''
    },
    {
      title: 'Virtual Reality Training Modules',
      body: '',
      img: '',
      caption: ''
    },
  ];
}
