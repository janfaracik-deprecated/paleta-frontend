import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamOrPaletteComponent } from './new-team-or-palette.component';

describe('NewTeamOrPaletteComponent', () => {
  let component: NewTeamOrPaletteComponent;
  let fixture: ComponentFixture<NewTeamOrPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTeamOrPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeamOrPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
