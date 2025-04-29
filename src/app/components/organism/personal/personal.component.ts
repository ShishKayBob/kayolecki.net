import { Component } from '@angular/core';
import { Project } from '../../../types/types';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../atom/link/link.component';

@Component({
  selector: 'app-personal',
  imports: [CommonModule, LinkComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss'
})
export class PersonalComponent {
  public projects: Project[] = [
    {
      title: 'BreakFree',
      body: 'Having come from a low-income family, attended college, gone through several health crisises and chronic illnesses, and the general emergencies of life; I accrued some debt. Before I knew it I felt overwhelmed and found myself seeking these tools out. I began to notice a lot of debt planning and repayment tools available are not in the best interests of those in debt. They are locked behind subscription costs, utilized very uncustomizable debt repayment plans, and do not work for the individuals trying to escape debt. I created this app to help those in need with little or no cost to them, with flexible tools for maximizing savings or earlier celebrations. Whatever the individual needs for planning debt repayment, I plan to provide.',
      img: '/img/BreakFree.png',
      alt: 'The logo of BreakFree, it features a blue chain with a link about to break. The title of BreakFree is also featured in dark blue lettering.',
      caption: 'BreakFree Logo.',
      github: 'https://github.com/ShishKayBob/BreakFree'
    },
    {
      title: 'KayOlecki.net',
      body: 'Designed and developed a responsive personal website to showcase projects, experience, and skills. Built with Angular and styled using PrimeNG for a clean, component-driven UI. Deployed via AWS using S3 for static hosting, CloudFront for CDN distribution, and Route 53 for domain management. Emphasized performance, accessibility, and scalability in architecture and design.',
      img: '/img/Logo.png',
      alt: 'The logo of kayolecki.net. It is a large peach colored, letter K with a gold four pointed star.',
      caption: '',
      github: 'https://github.com/ShishKayBob/kayolecki.net'
    },
  ]
}
