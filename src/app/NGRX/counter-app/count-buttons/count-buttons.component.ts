import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-count-buttons',
  imports: [],
  templateUrl: './count-buttons.component.html',
})
export class CountButtonsComponent {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter();

  OnIncrement() {
    this.increment.emit();
  }
  OnDecrement() {
    this.decrement.emit();
  }
  OnReset() {
    this.reset.emit();
  }
}
