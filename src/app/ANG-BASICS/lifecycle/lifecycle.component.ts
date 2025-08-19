import { Component, DestroyRef, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  // @Input({ required: true }) title = '';
  @Input() user = {};
  name: string = '';
  /*it runs when the class is instanciated and  it is only for DI, and some 
  class setup. can't use DOM here, element are not rendered yet.
  */
  constructor(private destoryRef: DestroyRef) {
    // this.name = this.title + 'Added value for check';
    // console.log(this.name, '--> constructor');
    console.log('First to run::CONSTRUCTOR');
    /**
     * In case you don't need to use ngOnDestroy()
     * useful if you probably want to pass it into other classes
     * and even for clean-up
     */
    destoryRef.onDestroy(() => {
      console.log('Destroy ref is also fired!');
    });
  }
  /* It runs before the ngOnInit
   - If a  component does not have any input ngOnChanges() will not get called
   - it takes changes argument that tracks each input previous value
     it current value and a flag whether of whether it is the first time
     the input has changed 
   - it runs every time input changes 
   - it does not get called for reference types like object, in that case
   we use ngDoCheck
   */

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange is fired! it means we have input data');
    console.log(changes);
  }
  // ngDoCheck() will always run under the following conditions:
  // - When the component initializes (after the constructor, before and after ngOnInit)
  // - When @Input() properties change (whether or not ngOnChanges is called)
  // - On any user interaction (click, input, etc.)
  // - On async tasks (setTimeout, setInterval, Promise resolution, Observable, etc.)
  // - Even when there's no actual change, Angular may still run ngDoCheck
  //   as part of its change detection cycle.
  //NOTE::::
  // ngDoCheck() will always run under the following conditions:
  // - When the component initializes (after the constructor, before and after ngOnInit)
  // - When @Input() properties change (whether or not ngOnChanges is called)
  // - On any user interaction (click, input, etc.)
  // - On async tasks (setTimeout, setInterval, Promise resolution, Observable, etc.)
  // - Even when there's no actual change, Angular may still run ngDoCheck
  //   as part of its change detection cycle.

  ngDoCheck(): void {
    console.log('NgDoCheck is fired!');
  }

  /*
  it runs after component inputs are initialized but can't access DOM elements the
  elements are not fully rendered yet. ALL INPUTS ARE SET BEFORE RENDER,
  you can updated component states based on inputs
    - You need access to @Input() values
    - You want to fetch data from services
    - You need to set up component logic, subscriptions, etc.
  it only runs once
  */

  ngOnInit(): void {
    // this.name = this.title + 'Added value for check';
    // console.log(this.name, '---> ngOninit');
    console.log('Second to run::ngOnit!');
  }
  /*
  - It only runs when when the component is unmounted/destroyed
  - other option is to use destroyRef in constructor
  */
  ngOnDestroy(): void {
    console.log('ngOnDestroy, IT IS FIRED! and component is destroyed');
  }
}
