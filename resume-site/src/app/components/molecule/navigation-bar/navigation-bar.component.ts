import { Component } from '@angular/core';
import { ButtonComponent } from '../../atom/button/button.component';

@Component({
  selector: 'navigation-bar',
  imports: [ButtonComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

}
