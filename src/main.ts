import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js'; // Need for working in stackblitz


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
