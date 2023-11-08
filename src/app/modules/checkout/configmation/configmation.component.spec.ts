import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmationComponent } from './configmation.component';

describe('ConfigmationComponent', () => {
  let component: ConfigmationComponent;
  let fixture: ComponentFixture<ConfigmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigmationComponent]
    });
    fixture = TestBed.createComponent(ConfigmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
