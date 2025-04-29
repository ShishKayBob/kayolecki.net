import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../../types/types';
import { LinkComponent } from '../../atom/link/link.component';

@Component({
  selector: 'app-professional',
  imports: [CommonModule, LinkComponent],
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
      title: 'Large Scale Web Apps',
      body: 'These days most companies have some form of web app. Over most of my professional experiences I have designed, developed, and maintained large-scale web applications supporting thousands of concurrent users. Architected scalable front-end and back-end systems using modern technologies (e.g., Angular, React, Next.js, Node.js, MySQL, AWS). Focused on modular codebases, performance optimization, accessibility, responsive designs and robust testing. Collaborated with cross-functional teams to implement agile workflows, CI/CD pipelines, and proactive monitoring solutions, ensuring 99.9% uptime and a seamless user experience at scale.',
      img: '/img/computer.png',
      caption: ''
    },
    {
      title: 'Virtual Reality Training Modules',
      body: 'I was fortunate enough to have an early break into my career in an emerging technology. I designed and developed immersive VR modules for training, education, and simulation experiences using Unity3D and C#. I created interactive 3D environments, user interfaces, and responsive control systems optimized for devices like HTC Vive Pro. I focused on performance optimization, spatial audio integration, and intuitive user interaction design. Collaborated with 3D artists, instructional designers, and product teams to ensure modules met engagement, realism, and user immersion.',
      img: '/img/vive controller.jpg',
      caption: ''
    },
  ];
}
