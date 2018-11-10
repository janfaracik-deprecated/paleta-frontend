import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalettesListComponent } from './palettes-list.component';

describe('PalettesListComponent', () => {
  let component: PalettesListComponent;
  let fixture: ComponentFixture<PalettesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalettesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalettesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
