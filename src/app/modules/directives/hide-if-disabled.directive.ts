import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {AbstractControl, ControlContainer, NgControl} from '@angular/forms';
import { filter } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Directive({
  selector: '[hideIfDisabled]',
})
export class HideIfDisabledDirective implements OnInit {
  _formControl!: NgControl;
  @Input('hideIfDisabled') formControlName!: string;

  get control(): AbstractControl {
    // @ts-ignore
    return this.controlContainer.control.get(this.formControlName);
  }

  constructor(
    private controlContainer: ControlContainer,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.render(!this.control.disabled);
    this.control.statusChanges
      .pipe(
        distinctUntilChanged(),
        map((satus) => satus !== 'DISABLED'),
        filter(Boolean)
      )
      .subscribe((satus) => this.render(satus));
  }

  private render(show: boolean) {
    if (show) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
