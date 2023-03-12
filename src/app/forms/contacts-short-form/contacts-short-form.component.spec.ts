import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsShortFormComponent } from './contacts-short-form.component';

describe('ContactsShortFormComponent', () => {
  let component: ContactsShortFormComponent;
  let fixture: ComponentFixture<ContactsShortFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsShortFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsShortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
