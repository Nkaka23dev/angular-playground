import { Component } from '@angular/core';
import { CountOutputComponent } from '../count-output/count-output.component';
import { CountButtonsComponent } from '../count-buttons/count-buttons.component';

@Component({
  standalone: true,
  selector: 'app-count',
  imports: [CountOutputComponent, CountButtonsComponent],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
 counter: number = 0;
 onIncrement(){
   this.counter++;
 }
 onDecrement(){
  this.counter--
 }
 onReset(){
  this.counter = 0
 }
}
