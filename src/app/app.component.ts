import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.component';
import CounterComponent from './counter/counter.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PanelComponent } from './panel/panel.component';
import { CardComponent } from './card/card.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { CheckedLifecycleComponent } from './checked-lifecycle/checked-lifecycle.component';

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
    LifeCycleHooksComponent,
    CheckedLifecycleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project';
  title2 = 'Experiencing reusing components in angular';
  counter = 89;
  name = 'Eric Nkaka';
  dataFromChildComponent = '';
  isActive = true;

  reveivedData(data: string) {
    this.dataFromChildComponent = data;
  }

  toggleHook() {
    this.isActive = !this.isActive;
  }
}
