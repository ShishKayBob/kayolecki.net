import { Component } from '@angular/core';
import { Project } from '../../../types/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal',
  imports: [CommonModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss'
})
export class PersonalComponent {
  public projects: Project[] = [
    {
      title: 'BreakFree',
      body: 'Having come from a low-income family, attended college, gone through several health crisises and chronic illnesses, and the general emergencies of life; I accrued some debt. Before I knew it I felt overwhelmed and found myself seeking these tools out. I began to notice a lot of debt planning and repayment tools available are not in the best interests of those in debt. They are locked behind subscription costs, utilized very uncustomizable debt repayment plans, and do not work for the individuals trying to escape debt. I created this app to help those in need with little or no cost to them, with flexible tools for maximizing savings or earlier celebrations. Whatever the individual needs for planning debt repayment, I plan to provide.',
      img: '/img/BreakFree.png',
      caption: 'BreakFree Logo.',
      link: '',
      github: ''
    },
  ]
}
