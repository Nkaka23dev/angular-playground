import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'tof-checked-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './checked-lifecycle.component.html',
  styleUrl: './checked-lifecycle.component.css',
})
export class CheckedLifecycleComponent {
  @ViewChild('inputField') inputElement!: ElementRef;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  items = ['Item1', 'Item2', 'Item3'];

  ngAfterViewInit(): void {
    console.log('After view init is now fired');
    this.inputElement.nativeElement.focus();
  }
  ngAfterContentChecked(): void {
    console.log('After content is fired checked!');
  }
  ngDoCheck(): void {
    console.log('Do check is fired!');
  }
  ngAfterContentInit(): void {
    console.log('After content is fired');
  }
  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }
  ngAfterViewChecked(): void {
    console.log('This is in after Viewchecked');
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
