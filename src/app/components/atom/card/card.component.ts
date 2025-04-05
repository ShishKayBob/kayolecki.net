import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'card',
  imports: [CommonModule, ChipModule],
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

  @Input () 
  public chips: string[] = [];

}
