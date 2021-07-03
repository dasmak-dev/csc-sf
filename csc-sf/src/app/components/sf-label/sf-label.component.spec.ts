import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfLabelComponent } from './sf-label.component';

describe('SfLabelComponent', () => {
  let component: SfLabelComponent;
  let fixture: ComponentFixture<SfLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
