import {Directive, EmbeddedViewRef, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef,} from '@angular/core';
import {distinctUntilChanged} from 'rxjs';
import {FeatureToggleService} from './feature-toggle.service';

@Directive({
  selector: '[affFeatureToggle]',
  standalone: true,
})
export class FeatureToggleDirective implements OnInit, OnChanges {
  @Input('affFeatureToggle') key!: string;

  @Input()
  set affFeatureToggleThen(templateRef: TemplateRef<any> | null) {
    this.thenTemplateRef = templateRef;
    this.thenViewRef = null;
    this.updateView();
  }

  @Input()
  set affFeatureToggleElse(templateRef: TemplateRef<any> | null) {
    this.elseTemplateRef = templateRef;
    this.elseViewRef = null;
    this.updateView();
  }

  private thenTemplateRef: TemplateRef<any> | null = null;
  private elseTemplateRef: TemplateRef<any> | null = null;
  private thenViewRef: EmbeddedViewRef<any> | null = null;
  private elseViewRef: EmbeddedViewRef<any> | null = null;

  get isViewRendered(): boolean {
    return this.viewContainer.length > 0;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private featureToggleService: FeatureToggleService
  ) {
    this.thenTemplateRef = templateRef;
  }

  ngOnInit() {
    this.featureToggleService.onChanges$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.updateView());
  }

  ngOnChanges() {
    this.updateView();
  }

  private updateView() {
    const hasElseTemplateRef = !!this.elseTemplateRef;
    const isEnabled = this.featureToggleService.isEnabled(this.key);

    if (hasElseTemplateRef) {
      this.clearView();
      if (isEnabled) {
        this.createThenView();
      } else {
        this.createElseView();
      }
    } else {
      if (isEnabled && !this.isViewRendered) {
        this.createThenView();
      }
      if (!isEnabled && this.isViewRendered) {
        this.clearView();
      }
    }
  }

  private createThenView() {
    // @ts-ignore
    this.thenViewRef = this.viewContainer.createEmbeddedView(this.thenTemplateRef);
  }

  private createElseView() {
    // @ts-ignore
    this.elseViewRef = this.viewContainer.createEmbeddedView(this.elseTemplateRef);
  }

  private clearView() {
    this.viewContainer.clear();
    this.thenViewRef && (this.thenViewRef = null);
    this.elseViewRef && (this.elseViewRef = null);
  }
}
