import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../../state/counter.actions';

@Component({
  standalone: true,
  selector: 'app-count-buttons',
  imports: [],
  templateUrl: './count-buttons.component.html',
})
export class CountButtonsComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  OnIncrement() {
    this.store.dispatch(increment());
  }
  OnDecrement() {
    this.store.dispatch(decrement());
  }
  OnReset() {
    this.store.dispatch(reset());
  }

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter();
  // OnIncrement() {
  //   this.increment.emit();
  // }
  // OnDecrement() {
  //   this.decrement.emit();
  // }
  // OnReset() {
  //   this.reset.emit();
  // }
}
