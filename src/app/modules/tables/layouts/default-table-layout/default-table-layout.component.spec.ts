import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTableLayoutComponent } from './default-table-layout.component';

describe('DefaultTableLayoutComponent', () => {
  let component: DefaultTableLayoutComponent;
  let fixture: ComponentFixture<DefaultTableLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultTableLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultTableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
