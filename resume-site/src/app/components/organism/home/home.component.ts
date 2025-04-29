import { Component } from '@angular/core';
import { HeroComponent } from '../../molecule/hero/hero.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
