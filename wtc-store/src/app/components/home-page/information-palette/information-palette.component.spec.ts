import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPaletteComponent } from './information-palette.component';

describe('InformationPaletteComponent', () => {
  let component: InformationPaletteComponent;
  let fixture: ComponentFixture<InformationPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
