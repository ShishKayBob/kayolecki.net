import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../atom/button/button.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'navigation-bar',
  imports: [ButtonComponent, ButtonModule, ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  @Output()
  public clouds: EventEmitter<boolean> = new EventEmitter(true);

  @Input()
  public currentState: boolean = true;

  public currentIcon: string = 'pi pi-cloud';

  ngOnInit() {
    if (window.innerWidth <= 990) {
      this.toggleClouds();
    }
  }

  public getIcon() {
    this.currentIcon = this.currentState ? 'pi pi-cloud' : 'pi pi-moon';
  }

  public toggleClouds() {
    this.currentState = !this.currentState;
    this.clouds.emit(this.currentState);
    this.getIcon();
  }
}
