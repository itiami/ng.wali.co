import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCounterOutputComponent } from './ngrx-counter-output.component';

describe('NgrxCounterOutputComponent', () => {
  let component: NgrxCounterOutputComponent;
  let fixture: ComponentFixture<NgrxCounterOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxCounterOutputComponent]
    });
    fixture = TestBed.createComponent(NgrxCounterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
