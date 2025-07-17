import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-count-buttons',
  imports: [],
  templateUrl: './count-buttons.component.html',
})
export class CountButtonsComponent implements OnInit{
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  OnIncrement(){
    this.increment.emit();
  }
  OnDecrement(){
    this.decrement.emit();
  }
  OnReset(){
    this.reset.emit();
  }
}
