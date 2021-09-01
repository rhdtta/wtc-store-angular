import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageArrayComponent } from './image-array.component';

describe('ImageArrayComponent', () => {
  let component: ImageArrayComponent;
  let fixture: ComponentFixture<ImageArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
