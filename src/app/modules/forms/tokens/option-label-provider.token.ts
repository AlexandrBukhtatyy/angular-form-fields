import { InjectionToken } from "@angular/core";
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

export const OPTION_LABEL_PROVIDER = new InjectionToken<{
  labelFormatter: TuiItemsHandlers<any>['stringify'];
}>('OPTION_LABEL_PROVIDER');
