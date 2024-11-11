import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {
  TuiAlert,
  TuiButton,
  TuiDialog,
  TuiError,
  TuiGroup,
  TuiIcon,
  TuiLabel,
  TuiRoot,
} from '@taiga-ui/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {OrderFormComponent} from './pages/order-form/order-form.component';
import {RouterModule} from '@angular/router';
import {routes} from './config/routes';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiBlock, TuiCheckbox, TuiFieldErrorPipe, TuiRadioComponent} from '@taiga-ui/kit';
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
  SelectWithHintVariantDirective,
  TextareaComponent,
} from './modules/forms';
import {ShowIfControlExistDirective} from './modules/forms/directives/show-if-control-exist.directive';
import {
  OptionWithHintContentTemplateComponent
} from './modules/forms/templates/option-with-hint-content-template/option-with-hint-content-template.component';
import {
  SelectWithTooltipVariantDirective
} from './modules/forms/form-fields/select/variants/select-with-tooltip-variant.directive';
import {
  ComboboxWithAddButtonDirective
} from './modules/forms/form-fields/combobox/variants/combobox-with-add-button.directive';
import {
  TUI_SANITIZER,
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputPhoneModule,
  TuiIslandDirective,
  TuiTextareaModule, TuiTextfieldControllerModule
} from '@taiga-ui/legacy';

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
    TuiRoot,
    TuiDialog,
    TuiAlert,
    ReactiveFormsModule,
    TuiInputPhoneModule,
    TuiError,
    TuiFieldErrorPipe,
    TuiInputModule,
    TuiBlock,
    TuiGroup,
    TuiInputNumberModule,
    TuiTextfieldControllerModule,
    TuiTextareaModule,
    TuiButton,
    TuiIslandDirective,
    TuiCheckbox,
    CheckboxListComponent,
    SelectComponent,
    ComboboxComponent,
    ComboboxDataProviderDirective,
    ComboboxWithHintVariantDirective,
    SelectWithHintVariantDirective,
    TuiIcon,
    OptionWithHintContentTemplateComponent,
    ShowIfControlExistDirective,
    SelectWithTooltipVariantDirective,
    ComboboxWithAddButtonDirective,
    TuiRadioComponent,
    TuiLabel,
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
