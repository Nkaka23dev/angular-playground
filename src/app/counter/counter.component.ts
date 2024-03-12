import { Component, Input, booleanAttribute, input } from '@angular/core';
import { changeValue, trimValue } from './counter.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'tof-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export default class CounterComponent {
  @Input({ required: true, transform: changeValue, alias: 'dummyName' })
  counter: number = 0;
  @Input({ transform: trimValue }) name: string = '';
  @Input({ transform: booleanAttribute }) showCounter: boolean = false;
}
