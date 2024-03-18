import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'tof-hover-click',
  standalone: true,

  templateUrl: './hover-click.component.html',
  styleUrl: './hover-click.component.css',
  host: {
    role: 'Presentation',
    '[id]': 'otherId',
    '[class.hovered]': 'isHovered',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'isClicked()',
  },
})
export class HoverClickComponent {
  otherId = 'Hello Nkaka eric';

  isHovered = false;
  onMouseEnter() {
    this.isHovered = true;
  }
  onMouseLeave() {
    this.isHovered = false;
  }

  isClicked() {
    alert('You clicked Me!');
  }

  someMethods() {
    console.log('Some method is now fired!');
  }

  // @HostBinding('attr.role') role = 'Presentation';

  // @HostBinding('class.hovered') isHovered = false;
  // @HostBinding('attr.role') role = false ? 'Nkaka' : 'User';
  // @HostBinding('style.color') color = true ? 'red' : 'green';
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.isHovered = true;
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.isHovered = false;
  // }
  // @HostListener('click')
  // isClicked() {
  //   alert('You clicked Me!');
  // }
}

/***  Most of All Bindings we have in angular
 * 1) Property binding
 * 2) Event binding
 * 3) Attribute binding
 * 4) Style binding
 * 5) property binding
 * 6) Two way binding
 * 7) class binding
 ***/
