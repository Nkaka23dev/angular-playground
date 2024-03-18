import {
  AfterRenderPhase,
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  afterRender,
} from '@angular/core';

@Component({
  selector: 'tof-after-render',
  standalone: true,
  imports: [],
  templateUrl: './after-render.component.html',
  styleUrl: './after-render.component.css',
})
export class AfterRenderComponent {
  @ViewChild('nkaka') elementReference!: ElementRef;

  constructor() {
    afterNextRender(
      () => {
        this.elementReference.nativeElement.style.color = 'red';
        console.log('After Next Render is fired!');
      },
      { phase: AfterRenderPhase.Write }
    );
    afterRender(
      () => {
        console.log(this.elementReference.nativeElement.style.color);
        console.log('This is After Render!');
      },
      { phase: AfterRenderPhase.Read }
    );
  }
}
