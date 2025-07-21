import { booleanAttribute, Component, EventEmitter, Input, Output, output } from '@angular/core';
import { changeValue, capitalizeValue } from '../counter.service';
import { CommonModule } from '@angular/common';
import { CountersDisplayComponent } from '../counters-display/counters-display.component';

@Component({
  standalone: true,
  selector: 'app-counters',
  imports: [CommonModule],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.css',
})
export class CountersComponent {
  @Output() dataEvent = new EventEmitter();

  giftWorldCountrydataToParent: string[] = ['Germany', 'Rwanda', 'Congo', 'Burundi', 'Uganda'];

  @Input({ required: true, transform: changeValue }) counter: number = 0;
  @Input({ required: true, transform: capitalizeValue }) message: string = '';
  @Input({ transform: booleanAttribute }) showCounterInfo: boolean = false;

  displayData() {
    this.dataEvent.emit(this.giftWorldCountrydataToParent);
  }
}
