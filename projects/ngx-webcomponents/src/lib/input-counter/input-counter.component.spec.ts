import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcounterComponent } from './inputcounter.component';

describe('InputcounterComponent', () => {
  let component: InputcounterComponent;
  let fixture: ComponentFixture<InputcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputcounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
