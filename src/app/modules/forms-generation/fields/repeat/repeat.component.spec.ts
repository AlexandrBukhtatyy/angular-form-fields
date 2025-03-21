import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatComponent } from './repeat.component';

describe('RepeatComponent', () => {
  let component: RepeatComponent;
  let fixture: ComponentFixture<RepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
