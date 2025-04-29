import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/molecule/navigation-bar/navigation-bar.component';
import { HeroComponent } from './components/molecule/hero/hero.component';
import { BackgroundComponent } from './components/molecule/background/background.component';
import { CardComponent } from './components/atom/card/card.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    BackgroundComponent,
    HeroComponent,
    CardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
