import { Component, EventEmitter, Output } from '@angular/core';
import { CountersComponent } from '../counters/counters.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-counters-display',
  imports: [CountersComponent, CommonModule],
  templateUrl: './counters-display.component.html',
  styleUrl: './counters-display.component.css',
})
export class CountersDisplayComponent {
  receivedDataFromChild: string[] = [];
  counter: number = 6;
  message: string = 'Hello! I am Counter display';
  showCounterInfo: boolean = true;

  displayReceived(data: string[]) {
    this.receivedDataFromChild = data;
  }
}
