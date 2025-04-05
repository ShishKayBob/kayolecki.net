import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolidCardComponent } from '../../atom/solid-card/solid-card.component';

@Component({
  selector: 'four-square',
  imports: [SolidCardComponent, CommonModule],
  templateUrl: './four-square.component.html',
  styleUrl: './four-square.component.scss'
})
export class FourSquareComponent {
  public panels: any[] = [
    { header: 'Accessibility',
      subheader: 'Building spaces where everyone belongs',
      body: `I believe technology should open doors, not build walls. Every project I take on is shaped by a commitment to designing inclusive, barrier-free experiences that empower people of all abilities. Accessibility is not an afterthought — it’s a fundamental part of the creative process, shaping decisions from the very first line of code to the final user interaction. Everyone deserves to feel seen, heard, and capable when engaging with the work we create.`
    },
    { header: 'Diversity',
      subheader: 'Celebrating every voice, every perspective',
      body: `Innovation thrives when we bring different voices to the table. I value working within teams and on projects that uplift a wide range of ideas, identities, and lived experiences. Diversity isn't just about representation; it's about building systems, products, and communities that reflect the world as it truly is — dynamic, complex, and beautifully varied. By embracing difference, we create work that resonates more deeply and reaches farther.`
    },
    { header: 'Strong Communication',
      subheader: 'Clear, honest, human connection',
      body: `Strong communication is the thread that holds every great collaboration together. I believe in sharing ideas clearly, asking thoughtful questions, and listening with intention. Whether it’s setting expectations, brainstorming solutions, or navigating challenges, transparent communication creates an environment of trust, respect, and momentum. Through conversation, we don't just exchange information — we build relationships and move creative visions forward.`
    },
    { header: 'Highly Iterable',
      subheader: 'Evolving boldly, learning constantly',
      body: `I see iteration not as correction, but as creation. Growth comes from a willingness to test, tweak, and transform — always chasing better, braver outcomes. Every project is an opportunity to learn and refine, guided by curiosity rather than perfectionism. By embracing an iterative mindset, we can adapt quickly, innovate thoughtfully, and stay aligned with what truly matters: creating work that evolves with the people it serves.`
    }
  ]
}
