import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'solid-card',
  imports: [CommonModule],
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

}
