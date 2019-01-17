import {NgModule} from '@angular/core';
import {NgxTinySliderComponent} from './ngx-tiny-slider.component';
import {NgxTinySliderService} from './ngx-tiny-slider.service';

@NgModule({
  declarations: [
    NgxTinySliderComponent
  ],
  imports: [
    NgxTinySliderService
  ],
  exports: [
    NgxTinySliderComponent
  ]
})
export class NgxTinySliderModule {
}
