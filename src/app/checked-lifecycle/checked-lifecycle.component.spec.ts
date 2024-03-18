import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedLifecycleComponent } from './checked-lifecycle.component';

describe('CheckedLifecycleComponent', () => {
  let component: CheckedLifecycleComponent;
  let fixture: ComponentFixture<CheckedLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckedLifecycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckedLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
