import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { count } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-count-output',
  imports: [],
  templateUrl: './count-output.component.html',
})
export class CountOutputComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      console.log(data, 'counter after log');
      this.counter = data.counter;
    });
  }
}
