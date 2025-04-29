import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input () 
  public headingText: string = '';

  @Input () 
  public bodyText: string = '';

}
