import {TinySliderInstance} from 'tiny-slider';
import {ElementRef} from '@angular/core';

export interface NgxTinySliderInstance {
  sliderInstance: TinySliderInstance;
  slideItemsContainerRef: ElementRef;
}
