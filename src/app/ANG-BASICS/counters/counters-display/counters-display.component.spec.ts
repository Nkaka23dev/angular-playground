import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersDisplayComponent } from './counters-display.component';

describe('CountersDisplayComponent', () => {
  let component: CountersDisplayComponent;
  let fixture: ComponentFixture<CountersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountersDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
