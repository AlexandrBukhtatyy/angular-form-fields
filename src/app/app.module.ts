import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormFieldSelectComponent, SelectWithHintVariantDirective} from "./modules/form-fields/form-field-select";
import {
  ComboboxDataProviderDirective,
  ComboboxWithHintVariantDirective,
  FormFieldComboboxComponent
} from "./modules/form-fields/form-field-combobox";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormFieldSelectComponent,
    SelectWithHintVariantDirective,
    ComboboxDataProviderDirective,
    FormFieldComboboxComponent,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
    ComboboxWithHintVariantDirective
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
