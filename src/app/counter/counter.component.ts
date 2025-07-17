import { Component, Input, input, ViewEncapsulation } from "@angular/core";

@Component({
    standalone:true,
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    encapsulation: ViewEncapsulation.ShadowDom
})
export default class CounterComponent{
  @Input() count: number = 0;
}