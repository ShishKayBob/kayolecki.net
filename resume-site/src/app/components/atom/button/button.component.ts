import { Component, Input } from '@angular/core';

@Component({
  selector: 'cloud-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input () 
  public innerText: string = '';

}
