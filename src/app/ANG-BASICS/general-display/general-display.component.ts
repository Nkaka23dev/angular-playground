import { Component, Input, input } from '@angular/core';
import { CountersDisplayComponent } from '../counters/counters-display/counters-display.component';
import { CardComponent } from '../card/card.component';
import { HoverClickComponent } from '../hover-click/hover-click.component';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';

@Component({
  standalone: true,
  selector: 'app-general-display',
  imports: [HoverClickComponent, LifecycleComponent],
  templateUrl: './general-display.component.html',
  styleUrls: ['./general-display.component.css'],
})
export class GeneralDisplayComponent {
  title = 'Lifecycle Component input sending to child compo';
  user = { name: 'eric', age: 24 };
  isActive = true;
  changeTitle() {
    this.title = `Random Title will be rendered ${Math.floor(Math.random() * 1000)}`;
  }
  toggleHooks() {
    this.isActive = !this.isActive;
  }
  changeUserName() {
    this.user.name = 'New added nname';
  }
}
