import { Component } from '@angular/core';
import { CountOutputComponent } from '../count-output/count-output.component';
import { CountButtonsComponent } from '../count-buttons/count-buttons.component';

@Component({
  standalone: true,
  selector: 'app-count',
  imports: [CountOutputComponent, CountButtonsComponent],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css',
})
export class CountComponent {
  //COMMENTED!!! NEEDED ONLY FOR PASSING PARENT TO CHILD
  // counterDisplay: number = 0;
  // onIncrement() {
  //   console.log('Counter increment clicked');
  //   this.counterDisplay++;
  // }
  // onDecrement() {
  //   console.log('Counter decrement clicked');
  //   this.counterDisplay--;
  // }
  // onReset() {
  //   console.log('Counter reset clicked');
  //   this.counterDisplay = 0;
  // }
}
