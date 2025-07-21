import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hover-click',
  imports: [],
  templateUrl: './hover-click.component.html',
  styleUrl: './hover-click.component.css',
  host: {
    role: 'presentation',
    '[class.hovered]': 'isHovered',
    '(click)': 'onClick()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HoverClickComponent {
  isHovered = false;
  onClick() {
    console.log('Clicked!');
  }
  onMouseEnter() {
    this.isHovered = true;
  }
  onMouseLeave() {
    this.isHovered = false;
  }
  // @HostBinding('class.hovered') isHovered = false;
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.isHovered = true;
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.isHovered = false;
  // }
}
