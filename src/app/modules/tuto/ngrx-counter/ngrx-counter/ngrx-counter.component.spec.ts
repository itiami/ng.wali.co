import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCounterComponent } from './ngrx-counter.component';

describe('NgrxCounterComponent', () => {
  let component: NgrxCounterComponent;
  let fixture: ComponentFixture<NgrxCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxCounterComponent]
    });
    fixture = TestBed.createComponent(NgrxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
