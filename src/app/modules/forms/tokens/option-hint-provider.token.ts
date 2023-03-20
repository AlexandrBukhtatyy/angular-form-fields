import { InjectionToken } from '@angular/core';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

export const OPTION_HINT_PROVIDER = new InjectionToken<{
  hintFormatter: TuiItemsHandlers<any>['stringify'];
}>('OPTION_HINT_PROVIDER');
