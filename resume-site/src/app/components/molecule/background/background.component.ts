import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'background',
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {

  @Input()
  public animations: boolean = true;
}
