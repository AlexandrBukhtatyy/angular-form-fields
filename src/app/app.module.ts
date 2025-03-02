import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {TuiRoot} from '@taiga-ui/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './config/routes';
import {TUI_SANITIZER} from '@taiga-ui/legacy';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {AuthModule} from '@modules/auth';
import {AuthService} from './core/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    TuiRoot,
    AuthModule.forRoot({
      origin: document.location.origin,
      authSeviceToken: AuthService,
    }),
  ],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    NG_EVENT_PLUGINS
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
