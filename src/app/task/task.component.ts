import { Component, Inject, Input } from '@angular/core';
import { SUB_ITEM } from '../subItem.token';

@Component({
  selector: 'tof-task',
  standalone: true,
  imports: [],
  providers: [{ provide: SUB_ITEM, useValue: 'Task value provided here!' }],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) taskItem!: string;

  constructor(@Inject(SUB_ITEM) public injectItem: string) {}
}
