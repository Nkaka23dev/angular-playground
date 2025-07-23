import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../state/counter.actions';
import { CounterState } from '../../state/counter.state';

@Component({
  standalone: true,
  selector: 'app-count-buttons',
  imports: [],
  templateUrl: './count-buttons.component.html',
})
export class CountButtonsComponent {
  constructor(private store: Store<{ counter: CounterState }>) {}
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
  // IsIncremented() {
  //   this.increment.emit();
  // }
  // IsDecremented() {
  //   this.decrement.emit();
  // }
  // IsReseted() {
  //   this.reset.emit();
  // }
}
