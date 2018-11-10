import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveColorComponent } from './active-color.component';

describe('ActiveColorComponent', () => {
  let component: ActiveColorComponent;
  let fixture: ComponentFixture<ActiveColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
