import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tof-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
  outputs: ['dataEvent: childData'],
})
export class PanelComponent {
  @Output() dataEvent = new EventEmitter<string>();

  sendData() {
    this.dataEvent.emit('Hello From parent component from child');
  }
}
