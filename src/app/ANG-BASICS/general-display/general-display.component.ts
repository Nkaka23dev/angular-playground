import { Component } from '@angular/core';
import { CountersDisplayComponent } from '../counters/counters-display/counters-display.component';
import { CardComponent } from '../card/card.component';
import { HoverClickComponent } from '../hover-click/hover-click.component';

@Component({
  standalone: true,
  selector: 'app-general-display',
  imports: [HoverClickComponent],
  templateUrl: './general-display.component.html',
})
export class GeneralDisplayComponent {}
