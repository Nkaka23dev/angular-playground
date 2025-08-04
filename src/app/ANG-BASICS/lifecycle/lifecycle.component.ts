import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent implements OnInit {
  @Input({ required: true }) title = '';
  name: string = '';
  /*it runs when the class is instanciated and  it is only for DI, and some 
  class setup. can't use DOM here, element are not rendered yet.
  */
  constructor() {
    this.name = this.title + 'Added value for check';
    console.log(this.name, '--> constructor');
    console.log('First to run::CONSTRUCTOR');
  }
  /*
  it runs after component inputs are initialized but can't access DOM elements the
  elements are not fully rendered yet. ALL INPUTS ARE SET BEFORE RENDER,
  you can updated component states based on inputs
    - You need access to @Input() values
    - You want to fetch data from services
    - You need to set up component logic, subscriptions, etc.
  */
  ngOnInit(): void {
    this.name = this.title + 'Added value for check';
    console.log(this.name, '---> ngOninit');
    console.log('Second to run::ngOnit!');
  }
}
