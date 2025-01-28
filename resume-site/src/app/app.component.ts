import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/molecule/navigation-bar/navigation-bar.component';
import { BackgroundComponent } from './components/molecule/background/background.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    BackgroundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
