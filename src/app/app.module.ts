import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiErrorModule,
  TuiGroupModule,
  TuiRootModule,
} from '@taiga-ui/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {OrderFormComponent} from './pages/order-form/order-form.component';
import {RouterModule} from '@angular/router';
import {routes} from './config/routes';
import {ReactiveFormsModule} from '@angular/forms';
import {
  TuiCheckboxLabeledModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputPhoneModule,
  TuiIslandModule,
  TuiRadioBlockModule,
  TuiTextAreaModule,
} from '@taiga-ui/kit';
import {PizzaDetailsFormComponent} from './forms/pizza-details-form/pizza-details-form.component';
import {ContactsShortFormComponent} from './forms/contacts-short-form/contacts-short-form.component';
import {DeliveryFormComponent} from './forms/delivery-form/delivery-form.component';
import {PaymentFormComponent} from './forms/payment-form/payment-form.component';
import {
  CheckboxListComponent,
  ComboboxComponent,
  ComboboxDataProviderDirective,
  ComboboxWithHintVariantDirective,
  InputComponent,
  NumberComponent,
  PhoneComponent,
  RadioBlockListComponent,
  SelectComponent,
  TextareaComponent,
} from './modules/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    PizzaDetailsFormComponent,
    ContactsShortFormComponent,
    DeliveryFormComponent,
    PaymentFormComponent,
    InputComponent,
    TextareaComponent,
    PhoneComponent,
    NumberComponent,
    RadioBlockListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiInputPhoneModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiRadioBlockModule,
    TuiGroupModule,
    TuiInputNumberModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiCheckboxLabeledModule,
    CheckboxListComponent,
    SelectComponent,
    ComboboxComponent,
    ComboboxDataProviderDirective,
    ComboboxWithHintVariantDirective
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
