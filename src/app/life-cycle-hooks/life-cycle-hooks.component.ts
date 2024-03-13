import { Component, DestroyRef, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tof-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css',
})
export class LifeCycleHooksComponent {
  @Input() title = 'nkakak';

  name = '';

  constructor(destroyRef: DestroyRef) {
    console.log('Contructor is called');
    destroyRef.onDestroy(() => {
      console.log('DestroyRef fired!');
    });
  }

  ngOnInit(): void {
    console.log('OnInit method is called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('On Destroy is fired');
  }
}
