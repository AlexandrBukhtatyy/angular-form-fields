import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxDefaultComponent } from './combobox-default.component';

describe('ComboboxDefaultComponent', () => {
  let component: ComboboxDefaultComponent;
  let fixture: ComponentFixture<ComboboxDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
