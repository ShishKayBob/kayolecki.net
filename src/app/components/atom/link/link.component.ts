import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'arrow-link',
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input()
  public text: string  = '';

  @Input()
  public href: string = '/';
}
