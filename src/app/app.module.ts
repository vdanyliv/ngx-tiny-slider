import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxTinySliderModule} from '../../projects/ngx-tiny-slider/src/lib/ngx-tiny-slider.module';

@NgModule({
  imports: [
    BrowserModule,
    NgxTinySliderModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    NgxTinySliderModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
