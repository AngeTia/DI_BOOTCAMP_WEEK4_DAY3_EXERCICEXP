import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusSectionComponent } from './focus-section.component';

describe('FocusSectionComponent', () => {
  let component: FocusSectionComponent;
  let fixture: ComponentFixture<FocusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
