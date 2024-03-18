import { Component, Input, booleanAttribute, input } from '@angular/core';
import { changeValue, trimValue } from './counter.service';
import { CommonModule } from '@angular/common';
import { GetterInputComponent } from '../getter-input/getter-input.component';

@Component({
  standalone: true,
  selector: 'tof-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  inputs: ['title:counterTitle'],
})
export default class CounterComponent extends GetterInputComponent {
  @Input({ required: true, transform: changeValue, alias: 'dummyName' })
  counter: number = 0;
  @Input({ transform: trimValue }) name: string = '';
  @Input({ transform: booleanAttribute }) showCounter: boolean = false;
}
