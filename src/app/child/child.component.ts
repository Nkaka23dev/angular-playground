import { Component, Inject } from '@angular/core';
import { SUB_ITEM } from '../subItem.token';

@Component({
  selector: 'tof-child',
  standalone: true,
  imports: [],
  providers: [
    { provide: SUB_ITEM, useValue: "Can't believe I am in child component" },
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  title = 'Hello from child component';
  constructor(@Inject(SUB_ITEM) public itemInject: string) {}

  showMessage() {
    alert('Hello again I am from children component, and I am alerting');
  }
}
