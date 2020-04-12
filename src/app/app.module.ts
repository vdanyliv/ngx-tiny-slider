import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxTinySliderModule} from 'ngx-tiny-slider';

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
