import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxTinySliderComponent} from './ngx-tiny-slider.component';
import {NgxTinySliderService} from './ngx-tiny-slider.service';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        NgxTinySliderComponent
    ],
    providers: [
        NgxTinySliderService
    ],
    exports: [
        NgxTinySliderComponent
    ]
})
export class NgxTinySliderModule {
}
