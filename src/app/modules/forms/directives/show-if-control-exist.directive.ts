import {Directive, Input, OnInit, TemplateRef, ViewContainerRef,} from '@angular/core';
import {AbstractControl, ControlContainer, NgControl} from '@angular/forms';

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
    this.render(!!this.control);
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
