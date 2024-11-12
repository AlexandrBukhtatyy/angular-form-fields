import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {TuiAlert, TuiButton, TuiDialog, TuiError, TuiGroup, TuiIcon, TuiLabel, TuiRoot,} from '@taiga-ui/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './config/routes';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiBlock, TuiCheckbox, TuiFieldErrorPipe, TuiRadioComponent} from '@taiga-ui/kit';
import {
  CheckboxListComponent,
  ComboboxComponent,
  ComboboxDataProviderDirective,
  ComboboxWithAddButtonDirective,
  ComboboxWithHintVariantDirective,
  OptionWithHintContentTemplateComponent,
  SelectComponent,
  SelectWithHintVariantDirective,
  SelectWithTooltipVariantDirective,
  ShowIfControlExistDirective,
} from '@modules/forms';
import {
  TUI_SANITIZER,
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputPhoneModule,
  TuiIslandDirective,
  TuiTextareaModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/legacy';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, NG_EVENT_PLUGINS],
  bootstrap: [AppComponent],
})
export class AppModule {
}
