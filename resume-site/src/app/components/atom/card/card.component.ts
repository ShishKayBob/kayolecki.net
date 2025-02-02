import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input () 
  public header: string = '';

  @Input () 
  public subheader: string = '';

  @Input () 
  public url: string = '';

  @Input () 
  public desc: string = '';

  @Input () 
  public even: boolean = false;

}
