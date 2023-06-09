import {Directive, Input, OnInit, TemplateRef, ViewContainerRef,} from '@angular/core';
import {AbstractControl, ControlContainer, NgControl} from '@angular/forms';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {startWith} from 'rxjs';

@Directive({
  selector: '[showIfControlExist]',
  standalone: true
})
export class ShowIfControlExistDirective implements OnInit {
  _formControl!: NgControl;
  @Input('showIfControlExist') formControlName!: string;

  get control(): AbstractControl {
    // @ts-ignore
    return this.controlContainer.control.get(this.formControlName);
  }

  constructor(
    private controlContainer: ControlContainer,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit() {
    // TODO: takeUntil
    this.controlContainer.valueChanges
      ?.pipe(
        startWith(!!this.control),
        map(() => !!this.control),
        distinctUntilChanged()
      )
      .subscribe((value) => this.render(value));
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
