import { Component, Input, input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { count, Observable, Subscribable, Subscription } from 'rxjs';
import { CounterState } from '../../state/counter.state';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-count-output',
  imports: [AsyncPipe],
  templateUrl: './count-output.component.html',
})
export class CountOutputComponent implements OnInit {
  // @Input() counter: number = 0;
  counter: number = 0;
  // counterSubscription: Subscription | undefined;
  // counter$: Observable<{ counter: number }> | undefined;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      console.log(data, 'COUNTER');
      this.counter = data.counter;
    });
    // this.counterSubscription = this.store.select('counter').subscribe(data => {
    //   console.log(data, 'counter after log');
    //   this.counter = data.counter;
    // });
    // this.counter$ = this.store.select('counter');
  }
  // ngOnDestroy(): void {
  //   if (this.counterSubscription) {
  //     this.counterSubscription?.unsubscribe();
  //   }
  // }
}
