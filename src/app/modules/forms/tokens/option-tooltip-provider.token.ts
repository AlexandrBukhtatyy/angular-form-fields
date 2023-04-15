import {InjectionToken} from '@angular/core';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

export const OPTION_TOOLTIP_PROVIDER = new InjectionToken<{
  tooltipFormatter: TuiItemsHandlers<any>['stringify'];
}>('OPTION_TOOLTIP_PROVIDER');
