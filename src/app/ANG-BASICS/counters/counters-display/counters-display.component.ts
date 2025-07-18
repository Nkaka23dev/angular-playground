import { Component } from '@angular/core';
import { CountersComponent } from '../counters/counters.component';

@Component({
  selector: 'app-counters-display',
  imports: [CountersComponent],
  templateUrl: './counters-display.component.html',
  styleUrl: './counters-display.component.css',
})
export class CountersDisplayComponent {
  counter: number = 6;
  message: string = 'Hello! I am Counter display';
  showCounterInfo: boolean = true;
}
