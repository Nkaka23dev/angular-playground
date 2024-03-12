import { Component, Input } from '@angular/core';
import { changeValue } from '../counter/counter.service';

@Component({
  selector: 'tof-getter-input',
  standalone: true,
  imports: [],
  templateUrl: './getter-input.component.html',
  styleUrl: './getter-input.component.css',
})
export class GetterInputComponent {
  private _title = '';

  @Input({ required: true })
  get title() {
    return this._title;
  }

  set title(value: string) {
    this._title = value.trim().toUpperCase();
  }
}
