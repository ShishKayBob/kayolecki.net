import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'solid-card',
  imports: [CommonModule, LinkComponent],
  templateUrl: './solid-card.component.html',
  styleUrl: './solid-card.component.scss'
})
export class SolidCardComponent {
  @Input()
  public header: string = '';

  @Input()
  public subheader: string = '';

  @Input()
  public body: string = '';

  @Input()
  public comingSoon: boolean = false;

  @Input()
  public href: string = '';

  @Input()
  public text: string = '';

}
