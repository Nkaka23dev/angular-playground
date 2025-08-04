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
})
export class GeneralDisplayComponent {
  title = 'Lifecycle Component input sending to child compo';
}
