import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NformsComponent } from './nforms.component';

describe('NformsComponent', () => {
  let component: NformsComponent;
  let fixture: ComponentFixture<NformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NformsComponent]
    });
    fixture = TestBed.createComponent(NformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
