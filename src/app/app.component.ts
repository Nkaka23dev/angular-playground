import { Component } from '@angular/core';
import { CountersDisplayComponent } from './ANG-BASICS/counters/counters-display/counters-display.component';
import { CommonModule } from '@angular/common';
import { GeneralDisplayComponent } from './ANG-BASICS/general-display/general-display.component';
import { CountComponent } from './NGRX/counter-app/count/count.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-playground';
}
