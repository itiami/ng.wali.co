import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCustomCounterComponent } from './ngrx-custom-counter.component';

describe('NgrxCustomCounterComponent', () => {
  let component: NgrxCustomCounterComponent;
  let fixture: ComponentFixture<NgrxCustomCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxCustomCounterComponent]
    });
    fixture = TestBed.createComponent(NgrxCustomCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
