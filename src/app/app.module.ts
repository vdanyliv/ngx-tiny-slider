import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxTinySliderModule} from '../../projects/ngx-tiny-slider/src/lib/ngx-tiny-slider.module';
import {NgxTinySliderService} from '../../projects/ngx-tiny-slider/src/lib/ngx-tiny-slider.service';

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
  providers: [
    NgxTinySliderService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
