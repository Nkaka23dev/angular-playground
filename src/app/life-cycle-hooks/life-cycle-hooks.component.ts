import {
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
  viewChild,
} from '@angular/core';
import ProfileComponent from '../profile.component';

@Component({
  selector: 'tof-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css',
})
export class LifeCycleHooksComponent {
  @Input() title = 'Eric';
  @ViewChild('elem') elementReference!: ElementRef;
  @ContentChild(ProfileComponent) profileContent!: ProfileComponent;

  name = '';
  loading = true;

  constructor(destroyRef: DestroyRef) {
    console.log('Contructor is called');
    destroyRef.onDestroy(() => {
      console.log('DestroyRef fired!');
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.loading = false;
    console.log('OnInit method is called');
  }

  ngAfterContentInit(): void {
    console.log('After content initialize');
    console.log(this.profileContent);
  }

  ngAfterViewInit(): void {
    console.log(this.elementReference.nativeElement);
    console.log('After view initialized!');
  }

  ngDoCheck(): void {
    console.log('NG DO CHECK IS NOW FIRED IN HERE!!!!!!!!!!!!!!!');
  }

  ngOnDestroy(): void {
    console.log('On Destroy is fired');
  }
}
