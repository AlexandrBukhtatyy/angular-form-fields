import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBlockListComponent } from './radio-block-list.component';

describe('RadioBlockListComponent', () => {
  let component: RadioBlockListComponent;
  let fixture: ComponentFixture<RadioBlockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioBlockListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
