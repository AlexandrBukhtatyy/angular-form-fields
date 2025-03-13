import {Component} from '@angular/core';
import {FormGroupBase, InputComponent, PhoneComponent} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'aff-contacts-short-form',
  templateUrl: './contacts-short-form.component.html',
  styleUrls: ['./contacts-short-form.component.less'],
  imports: [
    ReactiveFormsModule,
    InputComponent,
    PhoneComponent
  ],
  standalone: true
})
export class ContactsShortFormComponent extends FormGroupBase {
}
