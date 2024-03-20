import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  contentChildren,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SUB_ITEM } from '../subItem.token';

@Component({
  selector: 'tof-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  // @ContentChild(ChildComponent, { read: ChildComponent })
  // childComp!: ChildComponent;
  // @ContentChild(ChildComponent, { read: ElementRef })
  // childComp2!: ElementRef;

  @ContentChildren(ChildComponent, { read: ChildComponent })
  children!: QueryList<ChildComponent>;

  @ContentChildren(SUB_ITEM) subItemFromChild!: QueryList<string>;

  ngAfterContentInit(): void {
    // console.log(this.childComp);
    // console.log(this.childComp2.nativeElement);
    console.log(this.subItemFromChild);
  }
}
