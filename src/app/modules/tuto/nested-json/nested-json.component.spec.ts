import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedJsonComponent } from './nested-json.component';

describe('NestedJsonComponent', () => {
  let component: NestedJsonComponent;
  let fixture: ComponentFixture<NestedJsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedJsonComponent]
    });
    fixture = TestBed.createComponent(NestedJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
