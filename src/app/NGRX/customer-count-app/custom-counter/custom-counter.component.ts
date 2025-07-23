import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../../state/counter.state';
import { changeTitle, customIncrement } from '../../state/counter.actions';

@Component({
  standalone: true,
  selector: 'app-custom-counter',
  imports: [FormsModule],
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css',
})
export class CustomCounterComponent implements OnInit {
  appTitle!: string;
  value: number = 1;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe({
      next: res => {
        console.log('Title in custom component is changed');
        this.appTitle = res.appName;
      },
    });
  }

  addForm() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }
  changeText() {
    this.store.dispatch(changeTitle());
  }
}
