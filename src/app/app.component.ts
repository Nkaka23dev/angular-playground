import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.component';
import CounterComponent from './counter/counter.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PanelComponent } from './panel/panel.component';
import { CardComponent } from './card/card.component';
import { HoverClickComponent } from './hover-click/hover-click.component';
import { AfterRenderComponent } from './after-render/after-render.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { TaskComponent } from './task/task.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfileComponent,
    CounterComponent,
    GetterInputComponent,
    PanelComponent,
    CardComponent,
    HoverClickComponent,
    AfterRenderComponent,
    ViewChildExampleComponent,
    TaskComponent,
    ChildComponent,
    ParentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tasks = ['Task1', 'Task2', 'Task3', 'Task4'];
  title = 'angular-project';
  title2 = 'Experiencing reusing components in angular';
  counter = 89;
  name = 'Eric Nkaka';
  dataFromChildComponent = '';
  @ViewChildren(TaskComponent, { read: ElementRef })
  taskComp!: QueryList<ElementRef>;
  // @ViewChildren(TaskComponent) taskComp!: QueryList<TaskComponent>;

  reveivedData(data: string) {
    this.dataFromChildComponent = data;
  }
  ngAfterViewInit(): void {
    // console.log(this.taskComp);
    // console.log(this.taskComp.forEach((task) => console.log(task.taskItem)));
    console.log(
      this.taskComp.forEach((value) => console.log(value.nativeElement))
    );
    this.taskComp.changes.subscribe(() => {
      console.log('I am changing every time!!!');
    });
    setTimeout(() => {
      this.tasks.push(`Task ${this.tasks.length + 1}`);
    }, 3000);
  }
}
