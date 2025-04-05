import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/molecule/navigation-bar/navigation-bar.component';
import { BackgroundComponent } from './components/molecule/background/background.component';
import { FooterComponent } from './components/molecule/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    BackgroundComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public animations: boolean = true;

  public handleToggle(toggle: boolean) {
    this.animations = toggle;
  }
}
