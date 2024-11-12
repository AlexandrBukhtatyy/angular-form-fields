import { Component } from '@angular/core';
import {FormGroupBase, InputComponent} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'aff-contacts-short-form',
  templateUrl: './contacts-short-form.component.html',
  styleUrls: ['./contacts-short-form.component.less'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent
  ]
})
export class ContactsShortFormComponent extends FormGroupBase {}
