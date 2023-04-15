import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/modules/forms/form-fields/select/app.module';
import 'zone.js'; // Need for working in stackblitz


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
