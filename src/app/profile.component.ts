import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'tof-profile, [tof-profile]:not(p)',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export default class ProfileComponent {}
