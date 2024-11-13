import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';

export const fadeInAnimation: AnimationTriggerMetadata = trigger('enterTrigger', [
  state('fadeIn', style({opacity: '1'})),
  transition('void => *', [style({opacity: '0'}), animate('500ms')])
]);

