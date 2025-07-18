import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-count-output',
  imports: [],
  templateUrl: './count-output.component.html',
})
export class CountOutputComponent {
  @Input() counter: number = 0;
}
