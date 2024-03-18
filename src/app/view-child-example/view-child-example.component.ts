import {
  AfterRenderPhase,
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  afterNextRender,
} from '@angular/core';
import { HoverClickComponent } from '../hover-click/hover-click.component';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'tof-view-child-example',
  standalone: true,
  imports: [HoverClickComponent, HighlightDirective],
  templateUrl: './view-child-example.component.html',
  styleUrl: './view-child-example.component.css',
})
export class ViewChildExampleComponent {
  @ViewChild('elRef', { static: false, read: ElementRef }) elRef!: ElementRef;
  @ViewChild('hoverComp', { read: HoverClickComponent })
  compRef!: HoverClickComponent;
  @ViewChild('containerRef', { read: ViewContainerRef })
  containerRef!: ViewContainerRef;
  @ViewChild(HighlightDirective, { read: HighlightDirective })
  highlightDirective!: HighlightDirective;

  constructor() {
    afterNextRender(
      () => {
        console.log('Hello after Render!');
      },
      { phase: AfterRenderPhase.Read }
    );
  }

  ngOnInit() {
    // console.log(this.elRef.nativeElement.innerHTML);
  }
  ngAfterViewInit(): void {
    // console.log(this.compRef.onMouseLeave());
    console.log(this.elRef);
    console.log(this.compRef);
    console.log(this.containerRef);
    console.log(this.highlightDirective);
  }
}
