import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgxTinySliderModule} from 'ngx-tiny-slider';

import {AppComponent} from './app.component';

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
