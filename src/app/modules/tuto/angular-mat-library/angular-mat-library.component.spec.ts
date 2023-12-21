import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMatLibraryComponent } from './angular-mat-library.component';

describe('AngularMatLibraryComponent', () => {
  let component: AngularMatLibraryComponent;
  let fixture: ComponentFixture<AngularMatLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMatLibraryComponent]
    });
    fixture = TestBed.createComponent(AngularMatLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
