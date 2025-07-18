import { booleanAttribute, Component, Input } from '@angular/core';
import { changeValue, capitalizeValue } from '../counter.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-counters',
  imports: [CommonModule],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.css',
})
export class CountersComponent {
  @Input({ required: true, transform: changeValue }) counter: number = 0;
  @Input({ required: true, transform: capitalizeValue }) message: string = '';
  @Input({ transform: booleanAttribute }) showCounterInfo: boolean = false;
}
